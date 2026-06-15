
# TestSprite AI Testing Report(MCP)

---

## 1️⃣ Document Metadata
- **Project Name:** meridian
- **Date:** 2026-06-15
- **Prepared by:** TestSprite AI Team

---

## 2️⃣ Requirement Validation Summary

#### Test TC001 Submit a contact inquiry successfully
- **Test Code:** [TC001_Submit_a_contact_inquiry_successfully.py](./TC001_Submit_a_contact_inquiry_successfully.py)
- **Test Error:** TEST BLOCKED

The contact page could not be reached — the server did not send a response for /contact.

Observations:
- The /contact URL shows the browser error 'ERR_EMPTY_RESPONSE' and a single 'Reload' button.
- Clicking the 'Reload' button twice did not resolve the error; the page remains an empty response interstitial.

- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/fa1ef186-3ee7-4d7c-a791-6552ae431513/7d14264f-170a-4e1d-b989-c76fd5c973b0
- **Status:** BLOCKED
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC002 Navigate across the main public pages on desktop
- **Test Code:** [TC002_Navigate_across_the_main_public_pages_on_desktop.py](./TC002_Navigate_across_the_main_public_pages_on_desktop.py)
- **Test Error:** TEST BLOCKED

The test could not be run to completion — a main public page failed to load due to a server error.

Observations:
- Navigating to the About page returned an ERR_EMPTY_RESPONSE page stating "localhost didn't send any data." 
- A Reload button is shown but reloading did not resolve the error (page remained on the ERR_EMPTY_RESPONSE screen).
- The homepage (/) had loaded earlier, so the issue appears when requesting the /about route; remaining header pages were not tested.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/fa1ef186-3ee7-4d7c-a791-6552ae431513/ecdeea36-f8d3-41f3-88bb-8fae49a56cd3
- **Status:** BLOCKED
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC003 Navigate between pages using the mobile menu
- **Test Code:** [TC003_Navigate_between_pages_using_the_mobile_menu.py](./TC003_Navigate_between_pages_using_the_mobile_menu.py)
- **Test Error:** TEST BLOCKED

The mobile navigation menu could not be reached — the site is rendering the desktop navigation for the current viewport and no hamburger/menu toggle is available to interact with. The test requires a mobile/responsive view to access the hamburger menu, which is not available in this session.

Observations:
- The page displays the full top navigation (About, Insights, Transactions, Enquire) rather than a mobile hamburger.
- No button labeled 'Menu', 'Open menu', 'Toggle navigation', or a hamburger icon was found in the interactive elements after multiple inspections.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/fa1ef186-3ee7-4d7c-a791-6552ae431513/1232099a-68bb-4469-b957-63bf54c09ff6
- **Status:** BLOCKED
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC004 View home page statistics and summaries
- **Test Code:** [TC004_View_home_page_statistics_and_summaries.py](./TC004_View_home_page_statistics_and_summaries.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/fa1ef186-3ee7-4d7c-a791-6552ae431513/71bfc5cd-bd22-4190-a4e0-8a1a109dd415
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC005 Navigate through the public site from the home page
- **Test Code:** [TC005_Navigate_through_the_public_site_from_the_home_page.py](./TC005_Navigate_through_the_public_site_from_the_home_page.py)
- **Test Error:** TEST BLOCKED

The About page could not be reached — the server returned an ERR_EMPTY_RESPONSE.

Observations:
- Navigating to /about shows a browser error page: 'This page isn’t working' with the message 'localhost didn’t send any data.' and 'ERR_EMPTY_RESPONSE'.
- Clicking the visible 'Reload' button (two attempts) did not recover the page; the error page and Reload button remain.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/fa1ef186-3ee7-4d7c-a791-6552ae431513/b7dc9f4b-e150-46f3-8540-f9bf5bc20bcf
- **Status:** BLOCKED
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC006 Filter transactions by asset class
- **Test Code:** [TC006_Filter_transactions_by_asset_class.py](./TC006_Filter_transactions_by_asset_class.py)
- **Test Error:** TEST BLOCKED

The Transactions page could not be loaded from the application server, preventing the test from running.

Observations:
- The browser displayed: "This page isn’t working" and "localhost didn’t send any data."
- The page error shown was: ERR_EMPTY_RESPONSE.
- A visible "Reload" button was present, but reloading requires the backend server to respond.

Since the Transactions route cannot be reached, selecting an asset class filter and verifying table updates cannot be performed. Please ensure the application server is running and retry the test.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/fa1ef186-3ee7-4d7c-a791-6552ae431513/41e9a14f-7b0a-4017-84e2-ed724de9bde1
- **Status:** BLOCKED
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC007 View track record charts and performance details
- **Test Code:** [TC007_View_track_record_charts_and_performance_details.py](./TC007_View_track_record_charts_and_performance_details.py)
- **Test Error:** TEST BLOCKED

The Track Record page could not be reached — the server returned an empty response and the page shows a persistent reload error, preventing verification of charts and hover details.

Observations:
- Navigating to /track-record resulted in ERR_EMPTY_RESPONSE.
- Clicking the 'Reload' button three times did not recover the page; the error page persists.
- No chart elements or performance details are present on the page to inspect.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/fa1ef186-3ee7-4d7c-a791-6552ae431513/1da900bd-14a5-4c82-bdf4-89a85ac9cfdd
- **Status:** BLOCKED
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC008 Filter transactions by geography
- **Test Code:** [TC008_Filter_transactions_by_geography.py](./TC008_Filter_transactions_by_geography.py)
- **Test Error:** TEST BLOCKED

The Transactions page could not be reached — the application returned an empty response preventing interaction with the transactions UI and filters.

Observations:
- The Transactions URL displays a browser error page with message 'localhost didn’t send any data' and 'ERR_EMPTY_RESPONSE'.
- Only a 'Reload' button is present; no geography filter controls or transactions table are visible.
- Clicking 'Reload' and previous reload/wait attempts did not load the application content.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/fa1ef186-3ee7-4d7c-a791-6552ae431513/76c726b1-985e-4e10-b67f-ad453d6f882f
- **Status:** BLOCKED
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC009 Combine transaction filters to narrow results
- **Test Code:** [TC009_Combine_transaction_filters_to_narrow_results.py](./TC009_Combine_transaction_filters_to_narrow_results.py)
- **Test Error:** TEST BLOCKED

The Transactions feature could not be reached — the server did not return data for the /transactions route.

Observations:
- The browser displayed "This page isn't working" with error code ERR_EMPTY_RESPONSE for localhost when attempting to load /transactions.
- The page only shows a 'Reload' button; clicking Reload three times did not recover the Transactions UI.
- The transactions UI and filter controls could not be accessed, so client-side filtering could not be exercised or verified.

- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/fa1ef186-3ee7-4d7c-a791-6552ae431513/66224b35-ffcd-48cc-ba4e-55cf037f278e
- **Status:** BLOCKED
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC010 Show validation errors on an empty contact form
- **Test Code:** [TC010_Show_validation_errors_on_an_empty_contact_form.py](./TC010_Show_validation_errors_on_an_empty_contact_form.py)
- **Test Error:** TEST BLOCKED

The contact form test could not be run because the /contact page is unreachable on localhost.

Observations:
- The browser shows ERR_EMPTY_RESPONSE with the message 'localhost didn’t send any data.'
- The page displays a 'Reload' button; clicking it multiple times did not load the contact page
- The contact form could not be reached, so validation submission and error checks could not be performed.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/fa1ef186-3ee7-4d7c-a791-6552ae431513/cc106e94-efea-4c8b-b8e9-de814cc45829
- **Status:** BLOCKED
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC011 Reject an invalid email in the contact form
- **Test Code:** [TC011_Reject_an_invalid_email_in_the_contact_form.py](./TC011_Reject_an_invalid_email_in_the_contact_form.py)
- **Test Error:** TEST BLOCKED

The contact page could not be reached — the server returned an empty response and the browser displays an error page, preventing the contact form test from running.

Observations:
- The page shows 'This page isn’t working' and 'ERR_EMPTY_RESPONSE' ('localhost didn\'t send any data').
- Clicking the 'Reload' button multiple times did not resolve the error and the contact form is not present on the page.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/fa1ef186-3ee7-4d7c-a791-6552ae431513/12c06735-0e12-4809-8e90-db94114914bf
- **Status:** BLOCKED
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC012 Browse the investment intelligence page
- **Test Code:** [TC012_Browse_the_investment_intelligence_page.py](./TC012_Browse_the_investment_intelligence_page.py)
- **Test Error:** TEST BLOCKED

The Investment Intelligence page could not be reached — the server returned an empty response.

Observations:
- The browser shows 'ERR_EMPTY_RESPONSE' with the message 'localhost didn’t send any data.'
- The Reload button on the error page was clicked twice and the error persisted (page did not load).

- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/fa1ef186-3ee7-4d7c-a791-6552ae431513/151b23c7-0335-4e4a-a810-3ef236d1cea4
- **Status:** BLOCKED
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC013 View firm background and methodology
- **Test Code:** [TC013_View_firm_background_and_methodology.py](./TC013_View_firm_background_and_methodology.py)
- **Test Error:** TEST BLOCKED

The About page could not be reached — the localhost server returned an empty response and the page content could not be loaded. The test cannot be run because the /about route did not return data.

Observations:
- The browser displays: 'This page isn’t working' and 'localhost didn’t send any data. ERR_EMPTY_RESPONSE'.
- The Reload button was clicked three times and the error persisted; the About page content (methodology and team information) was not visible.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/fa1ef186-3ee7-4d7c-a791-6552ae431513/c7dddc42-2f7d-47ee-8b6d-70d24f01c928
- **Status:** BLOCKED
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC014 Open the insights library article grid
- **Test Code:** [TC014_Open_the_insights_library_article_grid.py](./TC014_Open_the_insights_library_article_grid.py)
- **Test Error:** TEST BLOCKED

The /insights page could not be reached — the server returned no data and the page did not load, preventing verification of the article grid.

Observations:
- The browser shows: "This page isn’t working" and the message "localhost didn’t send any data. ERR_EMPTY_RESPONSE".
- Only a single 'Reload' button is visible; no insights content or article grid is present to verify.

- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/fa1ef186-3ee7-4d7c-a791-6552ae431513/dd5afd98-a49d-4577-8f06-36e9ab2e610d
- **Status:** BLOCKED
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC015 View advisory service offerings
- **Test Code:** [TC015_View_advisory_service_offerings.py](./TC015_View_advisory_service_offerings.py)
- **Test Error:** TEST BLOCKED

The Advisory Services page could not be reached — the server did not send a response and the page remained in a browser error state after reload attempts.

Observations:
- Navigating to /advisory-services showed "ERR_EMPTY_RESPONSE" with the message: 'localhost didn’t send any data.'
- Clicking the page's Reload button twice did not recover the page; the error persisted and no advisory service cards appeared.
- No service detail cards or service descriptions are present because the page failed to load.

- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/fa1ef186-3ee7-4d7c-a791-6552ae431513/b00b02af-76d5-43a7-bca1-6b61e7454d97
- **Status:** BLOCKED
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC016 Review the firm background and methodology from insights
- **Test Code:** [TC016_Review_the_firm_background_and_methodology_from_insights.py](./TC016_Review_the_firm_background_and_methodology_from_insights.py)
- **Test Error:** ❌ Failed to go to the start URL. Err: Navigation to http://localhost:3000 failed after 3 attempts: Browser showed error page on attempt 3
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/fa1ef186-3ee7-4d7c-a791-6552ae431513/3c5c1aab-f238-4b46-b9fe-cbd806b4865b
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---


## 3️⃣ Coverage & Matching Metrics

- **6.25** of tests passed

| Requirement        | Total Tests | ✅ Passed | ❌ Failed  |
|--------------------|-------------|-----------|------------|
| ...                | ...         | ...       | ...        |
---


## 4️⃣ Key Gaps / Risks
{AI_GNERATED_KET_GAPS_AND_RISKS}
---