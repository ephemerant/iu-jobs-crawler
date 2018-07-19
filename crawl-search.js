// Bloomington - IT/Development/Design 
// https://iujobs.peopleadmin.com/postings/search?utf8=%E2%9C%93&query=&query_v0_posted_at_date=&646%5B%5D=18&query_organizational_tier_1_id%5B%5D=8&225=&commit=Search

// Bloomington - All Jobs
// https://iujobs.peopleadmin.com/postings/search?utf8=%E2%9C%93&query=&query_v0_posted_at_date=&646%5B%5D=any&query_organizational_tier_1_id%5B%5D=8&225=&commit=Search

var jobs = [];

$('.job-item-posting').each((i, item) => {
    var $item = $(item);
    var cells = $item.find('.col-md-8 .col-5'); // plan, grade, campus, department, location

    jobs.push({
        job_title: $item.attr('data-posting-title'),
        salary_plan: $(cells[0]).text().trim(),
        salary_grade: $(cells[1]).text().trim(),
        campus: $(cells[2]).text().trim(),
        department: $(cells[3]).text().trim(),
        work_location: $(cells[4]).text().trim(),
        short_description: $item.find('.job-description').text().trim(),
        id: +$item.find('h3 a').attr('href').split('/')[2],
        // These are set when crawling the actual page for the listing
        crawled: false,
        crawled_on: '',
        department_information: '',
        job_summary: '',
        required_qualifications: '',
        preferred_qualifications: '',
        conditions_demands: '',
        salary_range: '',
        flsa: '',
        category: '',
        posting_number: '',
        open_date: '',
        close_date: '',
        open_until_filled: '',
        posting_disclaimer: '',
        special_instructions: ''
    });
});

console.table(jobs);

// Multiple pages: $('.pagination').length