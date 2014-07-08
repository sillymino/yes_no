// list of categories ("cats" for short)
var cats = [
    "Yes",
    "No",
    "Not Sure",
    "Irrelevant"
];

// var catDescriptions = [ 
//     "Appropriately answers the question (attempts to provide a relevant answer)",
// 	"Potentially answers the question (attempts to provide a relevant answer, but is insufficient in some way)",
// 	"Badly answers the question (does not attempt to provide a relevant answer)",
// 	"a Dialogue starting a different conversation than the question",
// 	"a Not English response to the question"
// ];


var catsText = {
    "Yes": "<strong>Yes</strong> (e.g., the response answers the question affirmatively)",
    "No": "<strong>No</strong> (e.g., the response answers the question negatively)",
    "Not Sure": "<strong>Not Sure</strong> (e.g., you are unsure whether the response is yes or no)",
    "Irrelevant": "<strong>Irrelevant</strong> (e.g. the response does not pertain to the question)"
};

var examples = {
    "Yes": [
        "<strong>Short Question:</strong> Oil Baths facilities in Qatar?",
        "<strong>Full Question:</strong> Any suggestions for Spas having the facility of Oil Baths?",
        "<strong>Response Subject:</strong> There is Turkish Hamams, I",
        "<strong>Response Body:</strong> There is Turkish Hamams, I will have to check with my QL buddy Kellyheroes and get back to you!"
    ],
    "No": [
        "<strong>Short Question:</strong> Oil Baths facilities in Qatar?",
        "<strong>Full Question:</strong> Any suggestions for Spas having the facility of Oil Baths?",
        "<strong>Response Subject:</strong> Brit",
        "<strong>Response Body:</strong> It could be a good defence against intruders if any .."
    ],
    "Not Sure": [
        "<strong>Short Question:</strong> Oil Baths facilities in Qatar?",
        "<strong>Full Question:</strong> Any suggestions for Spas having the facility of Oil Baths?",
        "<strong>Response Subject:</strong> Please be careful. Remember",
        "<strong>Response Body:</strong> Please be careful. Remember that crude oil can seep into the pores and can be toxic :O("
    ],
    "Irrelevant": [
        "<strong>Short Question:</strong> Where can I get an ASUS laptop fixed?",
        "<strong>Full Question:</strong> My ASUS laptop screen does not work, but everything else works still. Is there anywhere I can go to get it fixed?",
        "<strong>Response Subject:</strong> RE: Where can I get an ASUS laptop fixed?",
        "<strong>Response Body:</strong> do you have directions?"
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