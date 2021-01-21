let history = []

function search(ele) {

    if (event.key == 'Enter') {
        // to open a new window and search for the entered keyword
        window.open(`https://www.google.com/search?hl=en&source=hp&ei=BVz5X9SaMOXYz7sPj6SAiAg&q=${ele.value}&oq=${ele.value}&gs_lcp=CgZwc3ktYWIQAzIQCC4QsQMQgwEQyQMQChCTAjICCAAyCAguEMcBEKMCMgcIABCxAxAKMgIILjIICC4QxwEQrwEyAggAMgoIABCxAxCDARAKMgIIADICCC46CwgAELEDEIMBEMkDOggIABCxAxCDAToFCAAQsQM6DgguELEDEIMBEMkDEJMCOggILhCxAxCDAToFCC4QsQM6CwguELEDEMcBEKMCOgsILhCxAxDJAxCTAjoOCC4QsQMQgwEQxwEQowI6CwguELEDEMcBEK8BULoPWPUZYNUbaAFwAHgAgAHLAYgBugiSAQUwLjYuMZgBAKABAaoBB2d3cy13aXqwAQA&sclient=psy-ab&ved=0ahUKEwiUsZ3jqo7uAhVl7HMBHQ8SAIEQ4dUDCAc&uact=5`);
        history.push(ele.value)
        console.log(ele.value)

    }

}