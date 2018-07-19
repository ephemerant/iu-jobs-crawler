# IU Jobs Crawler
This project's crawler looks at the IU Jobs website and puts the listings into a database. The database can then be interacted with via a web interface that provides more powerful functionality than the original site.

## Project Structure
1. ``crawl-overview.js`` will look at the paginated "[Search Results](https://iujobs.peopleadmin.com/postings/search)" page and save the basic details of any listings that it has not previously encountered:
  - Job title
  - Salary plan
  - Salary grade
  - Campus
  - Department
  - Work location
  - Short description (first bit of job summary)
  - ID
2. ``crawl-listings.js`` will look for saved listings that haven't been crawled in depth yet and save their full details:
  - Department information
  - Job summary
  - Required qualifications
  - Preferred qualifcations
  - Working conditions and physical demands
  - Salary range
  - FLSA
  - Category
  - Posting number
  - Open date
  - Close date
  - Open until filled
  - Posting disclaimer
  - Special instructions summary
