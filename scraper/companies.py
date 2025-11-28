#!/usr/bin/env python3
"""
Final working script to extract all company names from SUTD Capstone Showcase.
Uses JavaScript textContent extraction which works reliably for all 320+ companies.
"""

import time
import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def scrape_all_companies(url):
    """
    Scrape all company names using JavaScript extraction.
    This is the most reliable method based on diagnostic testing.
    """
    print("=" * 70)
    print("SUTD Capstone Showcase - Company Name Scraper")
    print("=" * 70)
    print(f"\nFetching data from: {url}")
    
    chrome_options = Options()
    chrome_options.add_argument('--headless')
    chrome_options.add_argument('--no-sandbox')
    chrome_options.add_argument('--disable-dev-shm-usage')
    chrome_options.add_argument('--disable-gpu')
    chrome_options.add_argument('--window-size=1920,1080')
    
    driver = None
    try:
        print("Starting Chrome browser...")
        driver = webdriver.Chrome(options=chrome_options)
        driver.get(url)
        
        print("Waiting for page to load...")
        time.sleep(3)
        
        # Wait for marquee elements to appear
        try:
            WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.CLASS_NAME, "ue_marq_text_wrap"))
            )
            print("✓ Marquee elements detected")
        except:
            print("⚠ Timeout waiting for elements")
        
        # Give extra time for all content to load
        print("Waiting for dynamic content to fully load...")
        time.sleep(5)
        
        print("\nExtracting company names using JavaScript...")
        
        # Use JavaScript to extract all text content from ue_marq_text_wrap elements
        companies = driver.execute_script("""
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
        
        print(f"✓ Successfully extracted {len(companies)} companies")
        
        # Clean up company names (remove extra whitespace)
        cleaned_companies = []
        for company in companies:
            # Normalize whitespace
            cleaned = ' '.join(company.split())
            if cleaned:
                cleaned_companies.append(cleaned)
        
        # Remove duplicates while preserving order
        unique_companies = []
        seen = set()
        for company in cleaned_companies:
            if company not in seen:
                unique_companies.append(company)
                seen.add(company)
        
        print(f"✓ Found {len(unique_companies)} unique companies")
        
        if len(cleaned_companies) > len(unique_companies):
            print(f"  (Removed {len(cleaned_companies) - len(unique_companies)} duplicates)")
        
        return unique_companies
        
    except Exception as e:
        print(f"\n✗ Error: {e}")
        import traceback
        traceback.print_exc()
        return []
    finally:
        if driver:
            print("Closing browser...")
            driver.quit()

def export_to_excel(companies, filename='sutd_companies.xlsx'):
    """Export companies to Excel with proper formatting."""
    if not companies:
        print("\n✗ No companies to export")
        return False
    
    print(f"\nExporting to Excel file: {filename}")
    
    # Create DataFrame
    df = pd.DataFrame({
        'No.': range(1, len(companies) + 1),
        'Company Name': companies
    })
    
    # Export to Excel
    df.to_excel(filename, index=False, sheet_name='Companies')
    
    print(f"\n{'=' * 70}")
    print(f"✓ SUCCESS: Exported {len(companies)} companies to '{filename}'")
    print(f"{'=' * 70}")
    
    # Show preview
    print("\n📋 First 25 companies:")
    for i, company in enumerate(companies[:25], 1):
        print(f"  {i:3d}. {company}")
    
    if len(companies) > 25:
        print(f"\n  ... and {len(companies) - 25} more companies")
    
    if len(companies) >= 5:
        print(f"\n📋 Last 5 companies:")
        for i, company in enumerate(companies[-5:], len(companies) - 4):
            print(f"  {i:3d}. {company}")
    
    return True

def main():
    url = "https://capstoneshowcase.sutd.edu.sg/#"
    
    # Scrape companies
    companies = scrape_all_companies(url)
    
    if companies:
        # Export to Excel
        success = export_to_excel(companies)
        
        if success:
            print(f"\n✓ All done! You can now open 'sutd_companies.xlsx'")
            
            # Statistics
            print(f"\n📊 Statistics:")
            print(f"   Total companies: {len(companies)}")
            print(f"   Average name length: {sum(len(c) for c in companies) / len(companies):.1f} characters")
            
            # Check if count seems right
            if len(companies) >= 300:
                print(f"\n✓ Great! Found {len(companies)} companies (expected 360+)")
            elif len(companies) >= 200:
                print(f"\n✓ Found {len(companies)} companies (close to expected 360+)")
            else:
                print(f"\n⚠ Found only {len(companies)} companies (expected 360+)")
                print("   The page may have been updated or some companies didn't load")
    else:
        print("\n✗ Failed to extract companies. Please check:")
        print("   1. Internet connection")
        print("   2. Chrome/ChromeDriver installation")
        print("   3. Website accessibility")

if __name__ == "__main__":
    main()