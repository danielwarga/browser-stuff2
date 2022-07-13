/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, "../index.html"))

describe("Index page", () => {

    test("It displays a relevant title", () => {

        document.documentElement.innerHTML = html.toString();

        const heading = document.getElementById("main-title");

        expect(heading).toBeTruthy();

        expect(heading.textContent).toEqual("Title");
    })

    test("It displays three divs", () => {

        document.documentElement.innerHTML = html.toString();

        const divs= document.querySelectorAll("div");

        expect(divs).toBeTruthy();

        expect(divs.length).toEqual(3);
    })
})
