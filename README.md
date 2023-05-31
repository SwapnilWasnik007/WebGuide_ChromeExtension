# WebGuide_ChromeExtension

# StudentManagementSystem

## Summary:
This is a JavaScript project for a Chrome extension that aims to provide an interactive learning experience.
For more learning: [https://www.freecodecamp.org/news/building-chrome-extension/](https://www.freecodecamp.org/news/building-chrome-extension/)

## Problem Statement:
To create the functionality where admin can add guide/tour for web pages without deployment of code.
Admin must be able to modify the tour content using web app and it should reflect on user end without project deployment.
Once user browse for specific url the tour content should automatically be shown at start of the page.

## Solution:
Project contains total three different modules:
1. **Admin chrome extension**:  
It allows admin to select different components on the web page for which he/she wants to create tour guide for. After activating the chrome extension web page will be freezed and allows you to select the component and highlights the selected compnent and captures the html code of that component and create snapshot using html code and saves to centralize database/json.
2. **Admin Web Portal**:  
It allows admin to see the captured components from web page and add tour information text for the components which will be then saved to centralize database/json.
3. **User chrome extension**:  
This extension will be by default activated in end user machine after installation, it will be triggered once the specific url is browsed in browser and it will freeze the web page and start showing the tour guid information by hovering on the perticular components on web page.


## Learning Objectives
This project aims to cover the following learning objectives:

1. Understanding of javascript chrome extesnion project


Thank you for your interest in this Javascript Chrome Extension Project
### Happy coding!
