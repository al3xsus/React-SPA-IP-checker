# React-SPA-IP-check

___

[Версия на русском языке](README_ru.md)

___

[https://al3xsus.github.io/React-SPA-IP-checker/](https://al3xsus.github.io/React-SPA-IP-checker/)

___

A simple SPA to get information about IP address.

Used stack: React (create-react-app), Semantic UI React, SPA, localStorage.

The API [https://2ip.ua/ru/api/our-api](https://2ip.ua/ru/api/our-api) was used as information source.

**Warning, amount of daily requests is limited.**

## How it works

SPA consists of three sections - an IP address input form, a section of the current query result and a request history 
section.

In the form, the user enters the IP address into the input line and clicks the `Get Info` button. If the input line is 
empty or the address is not corresponds to the IP address (i.e. it will be something other than a record in the form of 
four decimal numbers with a value from 0 to 255, separated by dots) the input line will be highlighted in red and the 
`Get Info` button will be inactive. If successful, the query result will be added to the history and shown on the 
sections of the current result and history
respectively. If you enter a new address, the current result will be reset to zero.

The section of the current result is an information panel divided into three fields - IP address, its geographic 
information and provider information.

The query history section is a collection of dashboards for each previous request.

When the application starts, if there is some records in localStorage storage, the data will be obtained from it.
When you close the application (reloading the page or switching to it), the data will be written to localStorage.

You can navigate through the SPA using the small navigation bar on the left.

## Scripts

Run from the project folder:

### `yarn`

To install modules

### `yarn start`

Launches the application in development mode at [http: // localhost: 3000] (http: // localhost: 3000).

### `yarn build`

To build in the `build` folder.

### `yarn global add serve`

To install a local server.

### `serve -s build`

To run collected on a local server.

## Screenshots
IP address input form

![IP address input form](screenshots/1-input.png?raw=true "IP address input form")

Current result

![Current result](screenshots/2-result.png?raw=true "Current result")

 History of requests

![History of requests](screenshots/3-history.png?raw=true "History of requests")
