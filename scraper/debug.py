#!/usr/bin/env python3
"""
Diagnostic script to print the exact HTML structure of marquee elements
to see where company names are actually stored.
"""

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
import time

def diagnose_structure(url):
    """Print the actual HTML structure of marquee elements."""
    print(f"Diagnosing page structure at: {url}")
    print("=" * 70)
    
    chrome_options = Options()
    chrome_options.add_argument('--headless')
    chrome_options.add_argument('--no-sandbox')
    chrome_options.add_argument('--disable-dev-shm-usage')
    
    driver = None
    try:
        driver = webdriver.Chrome(options=chrome_options)
        driver.get(url)
        
        print("Waiting for page to load...")
        time.sleep(8)
        
        # Get all marquee elements
        elements = driver.find_elements(By.CLASS_NAME, "ue_marq_text_wrap")
        print(f"\nFound {len(elements)} elements with class 'ue_marq_text_wrap'\n")
        
        # Print the HTML of the first 10 elements
        print("=" * 70)
        print("HTML STRUCTURE OF FIRST 10 ELEMENTS:")
        print("=" * 70)
        
        for i, elem in enumerate(elements[:10], 1):
            print(f"\n--- Element {i} ---")
            
            # Get outer HTML
            outer_html = elem.get_attribute('outerHTML')
            print(f"Outer HTML:\n{outer_html}\n")
            
            # Get text content via JavaScript
            text_content = driver.execute_script("return arguments[0].textContent;", elem)
            print(f"Text Content: '{text_content}'")
            
            # Get inner text
            inner_text = elem.text
            print(f"Inner Text: '{inner_text}'")
            
            # Check for common attributes
            print(f"Data attributes:")
            for attr in ['data-company', 'data-name', 'title', 'aria-label']:
                value = elem.get_attribute(attr)
                if value:
                    print(f"  {attr}: {value}")
            
            print("-" * 70)
        
        # Also check the parent container
        print("\n" + "=" * 70)
        print("PARENT CONTAINER STRUCTURE:")
        print("=" * 70)
        
        try:
            # Find the main marquee container
            container = driver.find_element(By.CLASS_NAME, "ue-marquee-content")
            container_html = container.get_attribute('outerHTML')
            
            # Truncate if too long
            if len(container_html) > 5000:
                print(f"Container HTML (first 5000 chars):\n{container_html[:5000]}")
                print("\n... [truncated] ...")
            else:
                print(f"Container HTML:\n{container_html}")
        except:
            print("Could not find container")
        
        # Try to execute JavaScript to get all company names
        print("\n" + "=" * 70)
        print("TRYING JAVASCRIPT EXTRACTION:")
        print("=" * 70)
        
        js_companies = driver.execute_script("""
            var elements = document.querySelectorAll('.ue_marq_text_wrap');
            var companies = [];
            elements.forEach(function(elem) {
                var text = elem.textContent.trim();
                if (text) {
                    companies.push(text);
                }
            });
            return companies;
        """)
        
        print(f"\nJavaScript found {len(js_companies)} companies with text")
        if js_companies:
            print("\nFirst 20 companies via JavaScript:")
            for i, company in enumerate(js_companies[:20], 1):
                print(f"  {i}. {company}")
        
        return js_companies
        
    except Exception as e:
        print(f"\nError: {e}")
        import traceback
        traceback.print_exc()
        return []
    finally:
        if driver:
            driver.quit()

if __name__ == "__main__":
    url = "https://capstoneshowcase.sutd.edu.sg/#"
    companies = diagnose_structure(url)
    
    print(f"\n\n{'=' * 70}")
    print(f"SUMMARY: Found {len(companies)} companies total")
    print("=" * 70)