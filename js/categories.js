// list of categories ("cats" for short)
var cats = [
    "Yes",
    "No",
    "Not Sure",
    "Irrelevant",
    "NA"
];

var catsText = {
    "Yes": "<strong>Yes</strong> (e.g., the response suggests the answer is yes)",
    "No": "<strong>No</strong> (e.g., the response suggests the answer is no)",
    "Not Sure": "<strong>Not Sure</strong> (e.g., answers the question, but it is unclear if the answer is yes or no)",
    "Irrelevant": "<strong>Irrelevant</strong> (e.g., the response does not answer the question)",
    "NA": "<strong>N/A</strong> (e.g. Not Applicable)"
};

var examples = {
    "Yes": [
        "<strong>Short Question:</strong> Salary Hold - is it legal?",
        "<strong>Full Question:</strong> My friend is working as a sales executive.  The customer is not paying, so his company is holding his salary.  Is it legal for the company to do this?",
        "<strong>Response Subject:</strong> RE: Salary Hold - is it legal?",
        "<strong>Response Body:</strong> It is legal"
    ],
    "No": [
        "<strong>Short Question:</strong> Salary Hold - is it legal?",
        "<strong>Full Question:</strong> My friend is working as a sales executive.  The customer is not paying, so his company is holding his salary.  Is it legal for the company to do this?",
        "<strong>Response Subject:</strong> RE: Salary Hold - is it legal?",
        "<strong>Response Body:</strong> It is illegal"
    ],
    "Not Sure": [
        "<strong>Short Question:</strong> Work Visa",
        "<strong>Full Question:</strong> I have been to Qatar for less than three months under a work visa, but was not issued residence. I then left. Can I come back under a work or visit visa?",
        "<strong>Response Subject:</strong> RE: Work Visa",
        "<strong>Response Body:</strong> You need to be a little more specific about your circumstances in order to get an answer to your question"
    ],
    "Irrelevant": [
        "<strong>Short Question:</strong> Visit Syrian Refugee Camps?",
        "<strong>Full Question:</strong> Is it possilbe for someone to visit Syrian Refugee camps?",
        "<strong>Response Subject:</strong> Ahlan Ya",
        "<strong>Response Body:</strong> Ahlan Ya Osama...anyone...which one is more sophisticated to make general interactions, interviews or volunteering... Radius..really?"
    ],
    "NA": [
        "<strong>Short Question:</strong> Child Exit Permit",
        "<strong>Full Question:</strong> My daughter will go to her aunt for vacation in the Philippines - does she need an exit permit or travel clearance?",
        "<strong>Response Subject:</strong> RE: Child Exit Permit",
        "<strong>Response Body:</strong> Thank you guys for the information - my daughter is less than 18 years old"
    ]
};

var _T = {
    qnum: function (index, total) {
        return "Question " + (index + 1) + "/" + total;
    },
    pretext: "The response is...",
    hide: "HIDE",
    show: "SHOW"
};