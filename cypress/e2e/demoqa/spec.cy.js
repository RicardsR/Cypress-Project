import TextBoxPage from "../../pageObjects/demoqa/Text.page";
import CheckBox from "../../pageObjects/demoqa/Checkbox.page";
import RadioPage from "../../pageObjects/demoqa/Radiobutton.page";
import ButtonsPage from "../../pageObjects/demoqa/Buttons.page";

describe("DemoQA spec", () => {
    context("Textbox scenarios", () => {
        beforeEach(() => {
            TextBoxPage.visit();
        });

        it("Textbox - Positive case", () => {
            TextBoxPage.userName.type("Ricards Rein");
            TextBoxPage.userEmail.type("ricards@gmail.com");
            TextBoxPage.currentAddress.type("Valmiera Current");
            TextBoxPage.permanentAddress.type("Valmiera Permanent");
            TextBoxPage.submitButton.click();
            TextBoxPage.resultName.should("have.text", "Name:Ricards Rein");
            TextBoxPage.resultEmail.should("have.text", "Email:ricards.com");
            TextBoxPage.resultCurrentAddress.should("contain.text", "Current Address :Valmiera Current");
            TextBoxPage.resultPermanentAddress.should("contain.text", "Permananet Address :Valmiera Permanent");
        });

        it("Textbox - Negative case", () => {
            TextBoxPage.userEmail.type("random@random@random.com");
            TextBoxPage.submitButton.click();
            TextBoxPage.emailErrorInput().should("have.class", "field-error");
        });

    });

    context("Checkbox scenarios", () => {
        beforeEach(() => {
            CheckBox.visit();
        });

        it("Checkbox - Check values (Notes, Angular, Private, Excel)", () => {
            CheckBox.expandAll.click();
            CheckBox.getTitle.contains("Notes").click();
            CheckBox.getTitle.contains("Angular").click();
            CheckBox.getTitle.contains("Private").click();
            CheckBox.getTitle.contains("Excel File").click();
            CheckBox.result.should("contain.text", "You have selected :");
            CheckBox.resultText.should("contain.text", "notes");
            CheckBox.resultText.should("contain.text", "angular");
            CheckBox.resultText.should("contain.text", "private");
            CheckBox.resultText.should("contain.text", "excelFile");
        });

        it("Checkbox - Check values (All in office)", () => {
            CheckBox.expandAll.click();
            CheckBox.getTitle.contains("Office").click();
            CheckBox.result.should("contain.text", "You have selected :");
            CheckBox.resultText.should("contain.text", "office");
            CheckBox.resultText.should("contain.text", "public");
            CheckBox.resultText.should("contain.text", "private");
            CheckBox.resultText.should("contain.text", "classified");
            CheckBox.resultText.should("contain.text", "general");
        });
    });

    context("Radio button scenarios", () => {
        beforeEach(() => {
            RadioPage.visit();
        });

        it("Click on Yes and Impressive radio buttons", () => {
            RadioPage.yesRadio.click({ force: true });
            RadioPage.yesRadio.should("be.checked");
            RadioPage.impressiveRadio.click({ force: true });
            RadioPage.impressiveRadio.should("be.checked");
            RadioPage.noRadio.should("not.be.checked");
        });
    });

    context("Buttons scenarios", () => {
        beforeEach(() => {
            ButtonsPage.visit();
        });

        it.only("Button clicking", () => {
            ButtonsPage.doubleClickBtn.dblclick();
            ButtonsPage.doubleClickMessage.should("have.text", "You have done a double click");
            ButtonsPage.rightClickBtn.rightclick();
            ButtonsPage.rightClickMessage.should("have.text", "You have done a right click");
            ButtonsPage.allButtons.eq(2).click();
            ButtonsPage.dynamicClickMessage.should("have.text", "You have done a dynamic click");
        });
    });

});