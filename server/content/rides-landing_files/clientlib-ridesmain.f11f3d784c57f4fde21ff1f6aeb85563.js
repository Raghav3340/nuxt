/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main/webpack/components/re-rides/utils/app-component-integration-util.js":
/*!**************************************************************************************!*\
  !*** ./src/main/webpack/components/re-rides/utils/app-component-integration-util.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   screenIdRedirection: function() { return /* binding */ screenIdRedirection; }\n/* harmony export */ });\n\r\n/**\r\n|--------------------------------------------------\r\n| app component integration\r\n|--------------------------------------------------\r\n*/\r\n\r\n// Function to check if the device is iOS\r\nfunction isIOS() {\r\n    // Check if the native app has set the flag\r\n    if (window.isiOS) return true;\r\n\r\n    // Fallback to user agent check\r\n    const userAgent = navigator.userAgent || navigator.vendor || window.opera;\r\n    return /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;\r\n}\r\n\r\n// Function to check if the device is Android\r\nfunction isAndroid() {\r\n    // Check if the native app has set the flag\r\n    if (window.isAndroid) return true;\r\n\r\n    // Fallback to user agent check\r\n    const userAgent = navigator.userAgent || navigator.vendor || window.opera;\r\n    return /android/i.test(userAgent);\r\n}\r\n\r\n// Function to check if we're in a native app environment\r\nfunction isNativeApp() {\r\n    // Check for native app bridges\r\n    const hasIOSBridge = window.passURLtoMobile !== undefined;\r\n    const hasAndroidBridge = window?.Android?.passURLtoMobile !== undefined;\r\n    return (isIOS() && hasIOSBridge) || (isAndroid() && hasAndroidBridge);\r\n}\r\n\r\n// Function to handle URL navigation based on environment and parameters\r\nfunction handleNavigation(redirectionUrl, webOpenInNewTab, screenId) {\r\n    // First check if we're in a native app environment\r\n    if (isNativeApp()) {\r\n        if (isIOS()) {\r\n            window.passURLtoMobile(screenId, redirectionUrl);\r\n            return;\r\n        }\r\n        if (isAndroid()) {\r\n            window.Android.passURLtoMobile(screenId, redirectionUrl);\r\n            return;\r\n        }\r\n    }\r\n\r\n    // If we're not in a native app, handle web navigation\r\n    if (webOpenInNewTab === \"_blank\") {\r\n        window.open(redirectionUrl);\r\n    } else {\r\n        window.parent.location.href = redirectionUrl;\r\n    }\r\n}\r\n\r\nconst openInBrowser = (redirectionUrl, webOpenInNewTab) => {\r\n    if (isNativeApp()) {\r\n        if (isIOS()) {\r\n            window.openLinkInBrowser(redirectionUrl);\r\n            return;\r\n        }\r\n        if (isAndroid()) {\r\n            window.Android.openLinkInBrowser(redirectionUrl);\r\n            return;\r\n        }\r\n    }\r\n\r\n    // If we're not in a native app, handle web navigation\r\n    if (webOpenInNewTab === \"_blank\") {\r\n        window.open(redirectionUrl);\r\n    } else {\r\n        window.parent.location.href = redirectionUrl;\r\n    }\r\n}\r\n\r\n\r\nlet isInitialized = false;\r\nconst registeredClasses = new Set();\r\n\r\nconst screenIdRedirection = (className) => {\r\n    console.log(`Registering screenIdRedirection for class: ${className}`);\r\n    registeredClasses.add(className);\r\n\r\n    if (isInitialized) return;\r\n\r\n    document.addEventListener(\"click\", function (event) {\r\n        const target = event.target;\r\n\r\n        // Check if clicked element has any of the registered classes\r\n        if ([...registeredClasses].some(cls => target.classList.contains(cls))) {\r\n            event.preventDefault();\r\n\r\n            const redirectionUrl = target.getAttribute(\"data-href\");\r\n            const webOpenInNewTab = target.getAttribute(\"target\");\r\n            const screenId = target.getAttribute(\"screen-id\");\r\n            const redirectionType = target.getAttribute(\"redirection-type\");\r\n\r\n            // Validate required attributes\r\n            if (!redirectionUrl) {\r\n                console.warn(\"No data-href attribute found on clicked element\");\r\n                return;\r\n            }\r\n\r\n\r\n            const redirectionTypeList = [,]\r\n            if (redirectionType === \"open-in-app-popup\") {\r\n                handleNavigation(redirectionUrl, webOpenInNewTab, screenId);\r\n            }\r\n            if (redirectionType === \"open-in-browser\") {\r\n                openInBrowser(redirectionUrl, webOpenInNewTab);\r\n            }\r\n        }\r\n    });\r\n\r\n    isInitialized = true;\r\n};\r\n\n\n//# sourceURL=webpack://aem-maven-archetype/./src/main/webpack/components/re-rides/utils/app-component-integration-util.js?");

/***/ }),

/***/ "./src/main/webpack/components/re-rides/utils/cookies.js":
/*!***************************************************************!*\
  !*** ./src/main/webpack/components/re-rides/utils/cookies.js ***!
  \***************************************************************/
/***/ (function() {

eval("(\r\n    function () {\r\n        try {\r\n\r\n\r\n            console.log('Cookies');\r\n            // document.body.style.overflow = \"hidden\";\r\n            // document.documentElement.style.overflow = \"hidden\";\r\n            function setCookie(name, value, days) {\r\n                const date = new Date();\r\n                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));\r\n                const expires = \"expires=\" + date.toUTCString();\r\n                document.cookie = name + \"=\" + value + \";\" + expires + \";path=/\";\r\n            }\r\n\r\n            function getCookie(name) {\r\n                const cname = name + \"=\";\r\n                const decodedCookie = decodeURIComponent(document.cookie);\r\n                const ca = decodedCookie.split(';');\r\n                for (let c of ca) {\r\n                    while (c.charAt(0) === ' ') c = c.substring(1);\r\n                    if (c.indexOf(cname) === 0) return c.substring(cname.length, c.length);\r\n                }\r\n                return \"\";\r\n            }\r\n\r\n\r\n            const cookieConsent = getCookie(\"cookieConsent\");\r\n            const banner = document.getElementById('cookie-banner');\r\n            const consent = getCookie(\"cookieConsent\");\r\n\r\n            // Show banner only if cookieConsent is not set\r\n            if (!consent) {\r\n                document.querySelector('.recookies').style.display = \"block\";\r\n                document.body.style.overflow = \"hidden\";\r\n                document.documentElement.style.overflow = \"hidden\";\r\n            }\r\n\r\n\r\n            if (cookieConsent === \"accepted\") {\r\n                document.querySelector('.recookies').style.display = \"none\";\r\n                document.body.style.overflow = \"visible\";\r\n                document.documentElement.style.overflow = \"visible\";\r\n            }\r\n\r\n\r\n            document.querySelector(\".accept\").addEventListener(\"click\", () => {\r\n                setCookie(\"cookieConsent\", \"accepted\", 90);\r\n                document.body.style.overflow = \"visible\";\r\n                document.documentElement.style.overflow = \"visible\";\r\n                document.querySelector('.recookies').style.display = \"none\";\r\n            });\r\n\r\n            document.querySelector(\".decline\").addEventListener(\"click\", () => {\r\n                document.querySelector('.recookies').style.display = \"none\";\r\n                document.body.style.overflow = \"visible\";\r\n                document.documentElement.style.overflow = \"visible\";\r\n            });\r\n        } catch (error) {\r\n            console.log(error);\r\n        }\r\n\r\n    })();\n\n//# sourceURL=webpack://aem-maven-archetype/./src/main/webpack/components/re-rides/utils/cookies.js?");

/***/ }),

/***/ "./src/main/webpack/components/re-rides/utils/disable-pinching.js":
/*!************************************************************************!*\
  !*** ./src/main/webpack/components/re-rides/utils/disable-pinching.js ***!
  \************************************************************************/
/***/ (function() {

eval("// 2. Add JavaScript to prevent touch gestures that cause zooming\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n    const hasAppClass = document.body.classList.contains(\"rides-landing-app\");\r\n    if (hasAppClass) {\r\n        document.addEventListener('touchstart', function (event) {\r\n            // Check if multiple touches (pinch gesture)\r\n            if (event.touches.length > 1) {\r\n                event.preventDefault();\r\n            }\r\n        }, { passive: false });\r\n\r\n        // 3. Prevent touchmove with multiple fingers\r\n        document.addEventListener('touchmove', function (event) {\r\n            // Check if multiple touches (pinch gesture)\r\n            if (event.touches.length > 1) {\r\n                event.preventDefault();\r\n            }\r\n        }, { passive: false });\r\n    }\r\n})\n\n//# sourceURL=webpack://aem-maven-archetype/./src/main/webpack/components/re-rides/utils/disable-pinching.js?");

/***/ }),

/***/ "./src/main/webpack/components/re-rides/utils/headerBreadcrumbs.js":
/*!*************************************************************************!*\
  !*** ./src/main/webpack/components/re-rides/utils/headerBreadcrumbs.js ***!
  \*************************************************************************/
/***/ (function() {

eval("try {\r\n\r\n    function init() {\r\n        console.log(\"header is init\");\r\n        const headerAccordianButton = document.querySelectorAll(\r\n            \".re-revamp-v4-header__mobile-menu span\"\r\n        );\r\n        const actualMenuContent = document.querySelectorAll(\r\n            \".re-revamp-v4__accordion\"\r\n        );\r\n        const menuButton = document.querySelector(\r\n            \".re-revamp-v4-header__mobile-menu\"\r\n        );\r\n        const menuIcon = menuButton.querySelector(\".menu-icon\");\r\n        const closeIcon = menuButton.querySelector(\".close-icon\");\r\n\r\n        // Initially hide the close icon\r\n        closeIcon.style.display = \"none\";\r\n        menuIcon.style.display = \"flex\";\r\n\r\n        // Update the click event handler\r\n        menuButton.addEventListener(\"click\", () => {\r\n            // Toggle menu content\r\n            actualMenuContent.forEach((menu) => {\r\n                menu.classList.toggle(\"is-active\");\r\n            });\r\n\r\n            // Toggle icons\r\n            const isMenuOpen = actualMenuContent[0].classList.contains(\"is-active\");\r\n            menuIcon.style.display = isMenuOpen ? \"none\" : \"flex\";\r\n            closeIcon.style.display = isMenuOpen ? \"flex\" : \"none\";\r\n\r\n            // Add or remove data-cmp-expanded attribute based on menu state\r\n            if (isMenuOpen) {\r\n                menuButton.setAttribute(\"data-cmp-expanded\", \"true\");\r\n            } else {\r\n                menuButton.removeAttribute(\"data-cmp-expanded\");\r\n            }\r\n        });\r\n\r\n        // desktop\r\n        // queryallselector -re-revamp-v4-header .re-revamp-v4__accordion cmp-accordion__button\r\n        // for each - item - click event -\r\n\r\n        if (window.innerWidth >= 1024) {\r\n            const desktopAccordionButtons = document.querySelectorAll(\r\n                \".re-revamp-v4-header .re-revamp-v4__accordion .cmp-accordion__button\"\r\n            );\r\n\r\n            desktopAccordionButtons.forEach((button) => {\r\n                button.addEventListener(\"click\", () => {\r\n                    setTimeout(() => {\r\n                        const childWithAriaExpanded = button.classList.contains('cmp-accordion__button--expanded');\r\n                        console.log(button);\r\n                        console.log(childWithAriaExpanded)\r\n                        if (childWithAriaExpanded) {\r\n                            // No child with aria-expanded=\"true\" — set overflow hidden\r\n                            document.body.style.overflow = \"hidden\";\r\n                            document.documentElement.style.overflow = \"hidden\";\r\n\r\n                            console.log(\"Hiding overflow because clicked element does NOT have expanded child\");\r\n                        } else {\r\n                            // Child with aria-expanded=\"true\" exists — remove overflow restriction\r\n                            document.body.style.overflow = \"\";\r\n                            document.documentElement.style.overflow = \"\";\r\n                            console.log(\"Restoring overflow because clicked element HAS expanded child\");\r\n                        }\r\n                    }, 300);\r\n                });\r\n            });\r\n\r\n        }\r\n        if (window.innerWidth <= 700) {\r\n            const desktopAccordionButtons = document.querySelectorAll(\r\n                \".re-revamp-v4-header .re-revamp-v4__accordion .cmp-accordion__button\"\r\n            );\r\n            const buttonWrapper = document.querySelector(\r\n                \".re-revamp-v4__button_wrapper\"\r\n            );\r\n\r\n            desktopAccordionButtons.forEach((button) => {\r\n                button.addEventListener(\"click\", () => {\r\n                    setTimeout(() => {\r\n                        const childWithAriaExpanded = button.classList.contains('cmp-accordion__button--expanded');\r\n                        console.log(button);\r\n                        console.log(childWithAriaExpanded);\r\n\r\n                        if (childWithAriaExpanded) {\r\n                            // No child with aria-expanded=\"true\" — set overflow hidden\r\n                            buttonWrapper.style.position = \"static\";\r\n                        } else {\r\n                            // Child with aria-expanded=\"true\" exists — remove overflow restriction\r\n                            buttonWrapper.style.position = \"absolute\";\r\n                        }\r\n                    }, 0);\r\n                });\r\n            });\r\n\r\n        }\r\n    }\r\n\r\n    init();\r\n} catch (error) {\r\n    console.error(\"Error in headerBreadcrumbs.js\", error);\r\n}\n\n//# sourceURL=webpack://aem-maven-archetype/./src/main/webpack/components/re-rides/utils/headerBreadcrumbs.js?");

/***/ }),

/***/ "./src/main/webpack/components/re-rides/utils/langNavigtion.js":
/*!*********************************************************************!*\
  !*** ./src/main/webpack/components/re-rides/utils/langNavigtion.js ***!
  \*********************************************************************/
/***/ (function() {

eval("function init() {\r\n\r\n    try {\r\n        // Toggle accordions\r\n        const accordionHeaders = document.querySelectorAll('.accordion-header');\r\n\r\n        accordionHeaders.forEach(header => {\r\n            header.addEventListener('click', function () {\r\n                const accordionId = this.getAttribute('data-accordion');\r\n                const content = document.getElementById(accordionId);\r\n                const arrow = this.querySelector('.accordion-arrow');\r\n\r\n                // If in \"not available\" mode, clear the search input\r\n                if (noResultsMessage.style.display === 'block') {\r\n                    searchInput.value = '';\r\n                    noResultsMessage.style.display = 'none';\r\n\r\n                    // Reset display of country items\r\n                    countryItems.forEach(item => {\r\n                        item.style.display = 'flex';\r\n                    });\r\n                }\r\n\r\n                // Close all other accordions\r\n                document.querySelectorAll('.accordion-content').forEach(item => {\r\n                    if (item.id !== accordionId) {\r\n                        item.classList.remove('open');\r\n                    }\r\n                });\r\n\r\n                document.querySelectorAll('.accordion-arrow').forEach(arr => {\r\n                    if (arr !== arrow) {\r\n                        arr.classList.remove('open');\r\n                    }\r\n                });\r\n\r\n                // Toggle current accordion\r\n                content.classList.toggle('open');\r\n                arrow.classList.toggle('open');\r\n            });\r\n        });\r\n\r\n        // Country selection\r\n        const countryItems = document.querySelectorAll('.country-item');\r\n\r\n        // Check localStorage for previously selected country's language data\r\n        const savedLanguageData = localStorage.getItem('availableLanguages');\r\n        let savedCountry = null;\r\n\r\n        if (savedLanguageData) {\r\n            try {\r\n                const languageData = eval('(' + savedLanguageData + ')');\r\n                savedCountry = languageData.country;\r\n                console.log('Found saved country:', savedCountry);\r\n            } catch (error) {\r\n                console.error('Error parsing saved language data:', error);\r\n            }\r\n        }\r\n\r\n        // Activate saved country if found\r\n        if (savedCountry) {\r\n            let foundCountryItem = null;\r\n\r\n            countryItems.forEach(item => {\r\n                const countryName = item.querySelector('.country-name').textContent.trim();\r\n                console.log(countryName);\r\n                if (countryName.toLowerCase() == savedCountry.toLowerCase()) {\r\n                    foundCountryItem = item;\r\n\r\n\r\n                    // Remove selection from all countries\r\n                    countryItems.forEach(country => {\r\n                        country.classList.remove('selected');\r\n                    });\r\n\r\n                    // Add selection to this country\r\n                    item.classList.add('selected');\r\n                    console.log('Auto-selected country:', savedCountry);\r\n\r\n                    // Find and open parent accordion\r\n                    const parentAccordion = item.closest('.accordion-content');\r\n                    if (parentAccordion) {\r\n                        // Open this accordion\r\n                        document.querySelectorAll('.accordion-content').forEach(content => {\r\n                            content.classList.remove('open');\r\n                        });\r\n\r\n                        document.querySelectorAll('.accordion-arrow').forEach(arrow => {\r\n                            arrow.classList.remove('open');\r\n                        });\r\n\r\n                        parentAccordion.classList.add('open');\r\n\r\n                        const accordionId = parentAccordion.id;\r\n                        const header = document.querySelector(`[data-accordion=\"${accordionId}\"]`);\r\n                        if (header) {\r\n                            const arrow = header.querySelector('.accordion-arrow');\r\n                            if (arrow) arrow.classList.add('open');\r\n                        }\r\n                    }\r\n                }\r\n            });\r\n        }\r\n\r\n        countryItems.forEach(item => {\r\n            item.addEventListener('click', function (e) {\r\n                // Remove selection from all countries\r\n                countryItems.forEach(country => {\r\n                    country.classList.remove('selected');\r\n                });\r\n\r\n                // Add selection to clicked country\r\n                this.classList.add('selected');\r\n\r\n                // Store language data in localStorage before navigation\r\n                const link = this.querySelector('a');\r\n                if (link && link.dataset.availableLanguages) {\r\n                    try {\r\n                        // Get the string from data attribute\r\n                        const languageDataString = link.dataset.availableLanguages;\r\n\r\n                        // Convert it to valid JSON by ensuring property names are quoted\r\n                        console.log(languageDataString);\r\n\r\n                        // Now parse the properly formatted JSON\r\n                        const languageData = eval('(' + languageDataString + ')');\r\n\r\n                        localStorage.setItem('availableLanguages', JSON.stringify(languageData));\r\n                        console.log('Stored language data:', languageData);\r\n\r\n                        // Prevent default link behavior\r\n                        e.preventDefault();\r\n\r\n                        // Redirect to default URL from language data instead of href\r\n                        if (languageData.defaultUrl) {\r\n                            console.log(languageData.defaultUrl);\r\n                            window.location.href = languageData.defaultUrl;\r\n                        }\r\n                    } catch (error) {\r\n                        console.error('Error parsing language data:', error);\r\n                        console.log('Problematic data string:', link.dataset.availableLanguages);\r\n                    }\r\n                }\r\n\r\n                // You can add code here to handle the country selection\r\n                const selectedCountry = this.getAttribute('data-country');\r\n                console.log('Selected country:', selectedCountry);\r\n            });\r\n\r\n            // Prevent default behavior on link click\r\n            const link = item.querySelector('a');\r\n            if (link) {\r\n                link.addEventListener('click', function (e) {\r\n                    e.preventDefault();\r\n                    // The parent click handler will handle navigation\r\n                });\r\n            }\r\n        });\r\n\r\n        // Search functionality\r\n        const searchInput = document.querySelector('.search-input');\r\n        const noResultsMessage = document.querySelector('.no-results-message');\r\n\r\n        searchInput.addEventListener('input', function () {\r\n            const searchQuery = this.value.toLowerCase().trim();\r\n            let resultsFound = false;\r\n\r\n            countryItems.forEach(item => {\r\n                const countryName = item.querySelector('.country-name').textContent.toLowerCase();\r\n\r\n                if (countryName.includes(searchQuery)) {\r\n                    item.style.display = 'flex';\r\n                    resultsFound = true;\r\n\r\n                    // Show only the matching country items when searching\r\n                    if (searchQuery) {\r\n                        // Hide accordion headers when searching\r\n                        document.querySelectorAll('.accordion-header').forEach(header => {\r\n                            header.style.display = 'none';\r\n                        });\r\n\r\n                        // Make all accordion contents visible\r\n                        document.querySelectorAll('.accordion-content').forEach(content => {\r\n                            content.classList.add('open');\r\n                        });\r\n                    }\r\n                } else {\r\n                    item.style.display = 'none';\r\n                }\r\n            });\r\n\r\n            // Show/hide accordions based on whether they have visible items\r\n            if (searchQuery) {\r\n                // No need to adjust accordion visibility as we're showing only countries\r\n\r\n                // Show \"no results\" message if no matching countries found\r\n                if (!resultsFound) {\r\n                    noResultsMessage.style.display = 'block';\r\n                    document.querySelector('.selector-content').style.display = 'block';\r\n\r\n                    // When no results, show normal view with all accordions\r\n                    document.querySelectorAll('.accordion-header').forEach(header => {\r\n                        header.style.display = 'flex';\r\n                    });\r\n                } else {\r\n                    noResultsMessage.style.display = 'none';\r\n                    document.querySelector('.selector-content').style.display = 'block';\r\n                }\r\n            } else {\r\n                // Reset visibility of all accordions when search is cleared\r\n                document.querySelectorAll('.accordion').forEach(accordion => {\r\n                    accordion.style.display = 'block';\r\n                });\r\n\r\n                // Restore accordion headers when search is cleared\r\n                document.querySelectorAll('.accordion-header').forEach(header => {\r\n                    header.style.display = 'flex';\r\n                });\r\n\r\n                // Reset accordion content visibility to default state\r\n                document.querySelectorAll('.accordion-content').forEach(content => {\r\n                    content.classList.remove('open');\r\n                });\r\n\r\n                // Hide \"no results\" message when search is cleared\r\n                noResultsMessage.style.display = 'none';\r\n                document.querySelector('.selector-content').style.display = 'block';\r\n\r\n                // Only open Asia Pacific by default if no saved country is found\r\n                if (!savedCountry) {\r\n                    document.querySelector('[data-accordion=\"asia-pacific\"]').click();\r\n                }\r\n            }\r\n        });\r\n\r\n        // Close button functionality\r\n        const closeBtn = document.querySelector('.close-btn--lang');\r\n        const langSelectotButton = document.querySelector('.re-revamp-v4-header__language-dropdown');\r\n\r\n        closeBtn.addEventListener('click', function () {\r\n\r\n            document.querySelector('.country-selector-container').style.display = 'none';\r\n            document.querySelector('.overlay-background-langselector').style.display = 'none';\r\n            document.documentElement.style.overflow = 'visible';\r\n        });\r\n        langSelectotButton.addEventListener('click', function () {\r\n            document.querySelector('.country-selector-container').style.display = 'block';\r\n            document.querySelector('.overlay-background-langselector').style.display = 'block';\r\n            document.documentElement.style.overflow = 'hidden';\r\n        });\r\n    }\r\n    catch (error) {\r\n        console.log('Error initializing language navigation:', error);\r\n    }\r\n}\r\n\r\ninit();\n\n//# sourceURL=webpack://aem-maven-archetype/./src/main/webpack/components/re-rides/utils/langNavigtion.js?");

/***/ }),

/***/ "./src/main/webpack/components/re-rides/utils/langStrip.js":
/*!*****************************************************************!*\
  !*** ./src/main/webpack/components/re-rides/utils/langStrip.js ***!
  \*****************************************************************/
/***/ (function() {

eval("try {\r\n\r\n\r\n    const languagePages = {\r\n        'english': '/en/home',\r\n        'spanish': '/es/inicio'\r\n    };\r\n\r\n    // Get the elements\r\n    const languageSelector = document.getElementById('language-selector');\r\n    const continueBtn = document.getElementById('continue-btn');\r\n    const closeBtn = document.getElementById('close-btn');\r\n    const languageStrip = document.getElementById('language-strip');\r\n    const statusMessage = document.getElementById('status-message');\r\n\r\n    // Check if we should display the language strip\r\n    function initLanguageStrip() {\r\n        // Get available languages from local storage\r\n        const availableLanguagesJSON = localStorage.getItem('availableLanguages');\r\n\r\n        if (!availableLanguagesJSON) {\r\n            // No language data found, hide strip\r\n            languageStrip.style.display = 'none';\r\n            return;\r\n        }\r\n\r\n        try {\r\n            const availableLanguages = eval('(' + availableLanguagesJSON + ')');\r\n\r\n            // Only show language strip if there are multiple languages\r\n            let countryDropdown = document.querySelector('.re-revamp-v4-header__language-dropdown');\r\n            countryDropdown.innerHTML = availableLanguages.country.substring(0, 2).toUpperCase();\r\n            if (availableLanguages.languages && availableLanguages.languages.length > 1) {\r\n                // Update notification text with country name\r\n                languageStrip.style.display = 'flex'\r\n                const notificationText = document.querySelector('.notification-text');\r\n                if (notificationText) {\r\n                    notificationText.textContent = `This website is available in multiple languages for ${availableLanguages.country}:`;\r\n\r\n\r\n                }\r\n\r\n                // Populate language selector\r\n                languageSelector.innerHTML = '';\r\n                availableLanguages.languages.forEach(lang => {\r\n                    console.log(lang);\r\n                    const option = document.createElement('option');\r\n                    option.value = lang.name.toLowerCase();\r\n                    option.textContent = lang.name;\r\n                    languageSelector.appendChild(option);\r\n\r\n                    // Add URLs to our mapping\r\n                    languagePages[lang.name.toLowerCase()] = lang.url;\r\n                });\r\n\r\n                // Set default language based on current URL path\r\n                const currentPath = window.location.pathname;\r\n                const currentLang = availableLanguages.languages.find(lang =>\r\n                    currentPath.startsWith(lang.url));\r\n\r\n                if (currentLang) {\r\n                    languageSelector.value = currentLang.name.toLowerCase();\r\n                }\r\n\r\n                // Show the language strip\r\n\r\n                document.querySelector('.overlay-background-langselector').style.display = 'block';\r\n            } else {\r\n                languageStrip.style.display = 'none';\r\n                document.querySelector('.overlay-background-langselector').style.display = 'none';\r\n            }\r\n        } catch (error) {\r\n            console.error('Error parsing available languages:', error);\r\n            languageStrip.style.display = 'none';\r\n            document.querySelector('.overlay-background-langselector').style.display = 'none';\r\n        }\r\n    }\r\n\r\n    // Initialize the language strip\r\n    initLanguageStrip();\r\n\r\n    // Continue button redirects to selected language page\r\n    continueBtn.addEventListener('click', function () {\r\n        const selectedLanguage = languageSelector.value;\r\n        const targetUrl = languagePages[selectedLanguage];\r\n\r\n        if (targetUrl) {\r\n            // Redirect to the selected language page\r\n            window.location.href = targetUrl;\r\n        }\r\n    });\r\n\r\n    // Close button hides the language strip\r\n    closeBtn.addEventListener('click', function () {\r\n        languageStrip.style.display = 'none';\r\n        document.querySelector('.overlay-background-langselector').style.display = 'none';\r\n\r\n        // Optionally, store the user's preference to not show the strip again\r\n        localStorage.setItem('languageStripDismissed', 'true');\r\n    });\r\n\r\n    // Check if language strip has been dismissed before showing\r\n    function checkDismissedStatus() {\r\n        const dismissed = localStorage.getItem('languageStripDismissed');\r\n        if (dismissed === 'true') {\r\n            languageStrip.style.display = 'none';\r\n            document.querySelector('.overlay-background-langselector').style.display = 'none';\r\n        } else {\r\n            initLanguageStrip();\r\n\r\n        }\r\n    }\r\n\r\n\r\n\r\n\r\n    checkDismissedStatus();\r\n}\r\ncatch (error) {\r\n    console.log('Error in langStrip.js:', error);\r\n}\r\n\n\n//# sourceURL=webpack://aem-maven-archetype/./src/main/webpack/components/re-rides/utils/langStrip.js?");

/***/ }),

/***/ "./src/main/webpack/components/re-rides/utils/screen-id-redirections.js":
/*!******************************************************************************!*\
  !*** ./src/main/webpack/components/re-rides/utils/screen-id-redirections.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_component_integration_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-component-integration-util.js */ \"./src/main/webpack/components/re-rides/utils/app-component-integration-util.js\");\n\r\n\r\ntry {\r\n    (0,_app_component_integration_util_js__WEBPACK_IMPORTED_MODULE_0__.screenIdRedirection)(\"card-details-button\");\r\n    (0,_app_component_integration_util_js__WEBPACK_IMPORTED_MODULE_0__.screenIdRedirection)(\"card-after-movie-button\");\r\n    (0,_app_component_integration_util_js__WEBPACK_IMPORTED_MODULE_0__.screenIdRedirection)(\"glass-button\");\r\n    (0,_app_component_integration_util_js__WEBPACK_IMPORTED_MODULE_0__.screenIdRedirection)(\"white-button\");\r\n} catch (error) {\r\n    console.log(\"Something went wrong with app redirections: \", error);\r\n}\r\n\n\n//# sourceURL=webpack://aem-maven-archetype/./src/main/webpack/components/re-rides/utils/screen-id-redirections.js?");

/***/ }),

/***/ "./src/main/webpack/components/re-rides/utils/send-iframe-height.js.js":
/*!*****************************************************************************!*\
  !*** ./src/main/webpack/components/re-rides/utils/send-iframe-height.js.js ***!
  \*****************************************************************************/
/***/ (function() {

eval("function sendIframeHeightOnLoad() {\r\n  if (window.location !== window.parent.location) {\r\n    document.querySelector(\"html\").classList.add(\"opened-in-iframe\");\r\n    document.querySelector(\"body\").classList.add(\"opened-in-iframe\");\r\n\r\n    let timeout;\r\n    const debouncedSendHeight = () => {\r\n      clearTimeout(timeout);\r\n      timeout = setTimeout(() => {\r\n        const height = Math.max(\r\n          // document.documentElement.clientHeight,\r\n          // document.documentElement.scrollHeight,\r\n          // document.body.clientHeight,\r\n          document.body.scrollHeight\r\n        );\r\n        const iframeDetails = {\r\n          height: height,\r\n          iframe_url: document.location.href,\r\n          re_xf_component_for_app: true\r\n        };\r\n        window.parent.postMessage(iframeDetails, \"*\");\r\n        // console.log(\"debouncedSendHeight\", iframeDetails);\r\n      }, 500);\r\n    };\r\n\r\n    const observer = new MutationObserver(debouncedSendHeight);\r\n    observer.observe(document.body, {\r\n      attributes: true,\r\n      childList: true,\r\n      subtree: true\r\n    });\r\n\r\n    debouncedSendHeight();\r\n\r\n    window.addEventListener(\"load\", debouncedSendHeight);\r\n    window.addEventListener(\"resize\", debouncedSendHeight);\r\n  }\r\n}\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", sendIframeHeightOnLoad);\r\n\n\n//# sourceURL=webpack://aem-maven-archetype/./src/main/webpack/components/re-rides/utils/send-iframe-height.js.js?");

/***/ }),

/***/ "./src/main/webpack/ridesmain/dynamic-components-styling.js":
/*!******************************************************************!*\
  !*** ./src/main/webpack/ridesmain/dynamic-components-styling.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * Dynamic CSS Components Loader\r\n * \r\n * This file handles lazy loading of CSS/SCSS files based on component visibility in viewport.\r\n * It uses IntersectionObserver to detect when elements enter the viewport\r\n * and only loads the CSS for those components when needed using webpack's dynamic imports.\r\n */\r\n\r\n// Mapping of component class names to their dynamic CSS import functions\r\nconst dynamicCssComponentsMapping = {\r\n  /**\r\n  |--------------------------------------------------\r\n  | Common styles\r\n  |--------------------------------------------------\r\n  */\r\n  \"rides-calendar\": async () => {\r\n    await __webpack_require__.e(/*! import() | css-rides-calendar */ \"css-rides-calendar\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/re-rides/ridescalendar/scss/_ridescalendar.scss */ \"./src/main/webpack/components/re-rides/ridescalendar/scss/_ridescalendar.scss\"));\r\n  },\r\n};\r\n\r\nconst alreadyLoadedCss = {};\r\n\r\nconst observerOptions = {\r\n  root: null,\r\n  rootMargin: \"300px\", // load CSS a bit earlier than JS \r\n  threshold: 0.01, // trigger when even a small part of the component is visible\r\n};\r\n\r\nconst DynamicCssComponents = {\r\n  init: function () {\r\n    const observer = new IntersectionObserver(\r\n      this.handleIntersection,\r\n      observerOptions\r\n    );\r\n\r\n    Object.keys(dynamicCssComponentsMapping).forEach((component) => {\r\n      const componentElements = document.querySelectorAll(`.${component}`);\r\n\r\n      if (componentElements.length > 0) {\r\n        componentElements.forEach(componentElement => {\r\n          // Store component name as a data attribute for reference in the callback\r\n          componentElement.dataset.cssComponentName = component;\r\n  \r\n          // Start observing the component\r\n          observer.observe(componentElement);\r\n        });\r\n      }\r\n    });\r\n\r\n    // Clean up the observer when page unloads\r\n    window.addEventListener(\"beforeunload\", () => {\r\n      observer.disconnect();\r\n    });\r\n\r\n    return {\r\n      disconnect: () => observer.disconnect(),\r\n      \r\n      loadCss: (componentName) => {\r\n        if (dynamicCssComponentsMapping[componentName] && !alreadyLoadedCss[componentName]) {\r\n          alreadyLoadedCss[componentName] = true;\r\n          return dynamicCssComponentsMapping[componentName]().catch(error => {\r\n            console.error(`Failed to load CSS for ${componentName}:`, error);\r\n            alreadyLoadedCss[componentName] = false;\r\n            return Promise.reject(error);\r\n          });\r\n        }\r\n        return Promise.resolve();\r\n      },\r\n      \r\n      // Preload specific CSS components by name (useful for critical paths)\r\n      preloadCss: (componentNames) => {\r\n        if (!Array.isArray(componentNames)) {\r\n          componentNames = [componentNames];\r\n        }\r\n        \r\n        return Promise.all(\r\n          componentNames.map(name => {\r\n            if (dynamicCssComponentsMapping[name] && !alreadyLoadedCss[name]) {\r\n              alreadyLoadedCss[name] = true;\r\n              return dynamicCssComponentsMapping[name]().catch(error => {\r\n                console.error(`Failed to preload CSS for ${name}:`, error);\r\n                alreadyLoadedCss[name] = false;\r\n                return Promise.reject(error);\r\n              });\r\n            }\r\n            return Promise.resolve();\r\n          })\r\n        );\r\n      }\r\n    };\r\n  },\r\n\r\n  // Callback function for IntersectionObserver\r\n  handleIntersection: function (entries, observer) {\r\n    entries.forEach((entry) => {\r\n      if (entry.isIntersecting) {\r\n        const componentElement = entry.target;\r\n        const component = componentElement.dataset.cssComponentName;\r\n\r\n        // Check if we have this component in our mapping and it hasn't been loaded yet\r\n        if (component && dynamicCssComponentsMapping[component] && !alreadyLoadedCss[component]) {\r\n          // Mark as loaded to prevent duplicate loading\r\n          alreadyLoadedCss[component] = true;\r\n          \r\n          // Load the CSS using webpack's dynamic import\r\n          dynamicCssComponentsMapping[component]()\r\n            .catch(error => {\r\n              console.error(`Failed to load CSS for ${component}:`, error);\r\n              // Reset the loaded state to allow retrying\r\n              alreadyLoadedCss[component] = false;\r\n            });\r\n\r\n          // Stop observing this component since we've initiated loading its CSS\r\n          observer.unobserve(componentElement);\r\n        }\r\n      }\r\n    });\r\n  },\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (DynamicCssComponents);\r\n\n\n//# sourceURL=webpack://aem-maven-archetype/./src/main/webpack/ridesmain/dynamic-components-styling.js?");

/***/ }),

/***/ "./src/main/webpack/ridesmain/dynamic-components.js":
/*!**********************************************************!*\
  !*** ./src/main/webpack/ridesmain/dynamic-components.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//register the className of each dynamic component to it's own js chunk, and initialization call\r\nconst dynamicComponents = {\r\n  /**\r\n  |--------------------------------------------------\r\n  | Common login\r\n  |--------------------------------------------------\r\n  */\r\n  \"login-with-otp\": async () => {\r\n    await\r\n      Promise.all(/*! import() | login-with-otp */[__webpack_require__.e(\"vendors-node_modules_handlebars_dist_cjs_handlebars_js-node_modules_firebase_app_dist_esm_ind-d6aede\"), __webpack_require__.e(\"login-with-otp\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/re-rides/navigation/login/js/login.js */ \"./src/main/webpack/components/re-rides/navigation/login/js/login.js\")).then(obj => obj.default.init());\r\n  },\r\n\r\n  \"service-follow-component\": async () => {\r\n    await __webpack_require__.e(/*! import() | rides-follow */ \"rides-follow\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/re-rides/rides-follow/js/rides-follow.js */ \"./src/main/webpack/components/re-rides/rides-follow/js/rides-follow.js\")).then((obj) => obj.default.init());\r\n  },\r\n  homeherobanner: async () => {\r\n    await __webpack_require__.e(/*! import() | hero-banner */ \"hero-banner\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/re-rides/homeherobanner/js/hero-banner.js */ \"./src/main/webpack/components/re-rides/homeherobanner/js/hero-banner.js\")).then((obj) => obj.default.init());\r\n  },\r\n\r\n  \"cmp-whats-tranding-container\": async () => {\r\n    await __webpack_require__.e(/*! import() | whats-trending */ \"whats-trending\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/re-rides/whatstrending/js/_whats-trending.js */ \"./src/main/webpack/components/re-rides/whatstrending/js/_whats-trending.js\")).then((obj) => obj.default.init());\r\n  },\r\n\r\n  royalEnfHero: async () => {\r\n    await __webpack_require__.e(/*! import() | royal-enfield-hero */ \"royal-enfield-hero\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/re-rides/royalenfhero/js/royalenfhero.js */ \"./src/main/webpack/components/re-rides/royalenfhero/js/royalenfhero.js\")).then((obj) => obj.default.init());\r\n  },\r\n\r\n  \"marquee-rides-events\": async () => {\r\n    await __webpack_require__.e(/*! import() | marquee-rides */ \"marquee-rides\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/re-rides/marquee-rides-events/js/_marquee-rides.js */ \"./src/main/webpack/components/re-rides/marquee-rides-events/js/_marquee-rides.js\")).then((obj) => obj.default.init());\r\n  },\r\n\r\n  \"legacy-swiper\": async () => {\r\n    await __webpack_require__.e(/*! import() | legacy-component */ \"legacy-component\").then(__webpack_require__.t.bind(__webpack_require__, /*! ../components/re-rides/legacySwiper/js/legacySwiper.js */ \"./src/main/webpack/components/re-rides/legacySwiper/js/legacySwiper.js\", 23)).then((obj) => obj.default.init());\r\n  },\r\n\r\n  \"rides-info__nav\": async () => {\r\n    await __webpack_require__.e(/*! import() | ridesinfo_nav */ \"ridesinfo_nav\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/re-rides/ridesnavigationtab/js/ridesnavigationtab.js */ \"./src/main/webpack/components/re-rides/ridesnavigationtab/js/ridesnavigationtab.js\")).then((obj) => obj.default.init());\r\n  },\r\n\r\n  \"services-container\": async () => {\r\n    await __webpack_require__.e(/*! import() | services-container */ \"services-container\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/re-rides/bikeslider/js/bikeslider.js */ \"./src/main/webpack/components/re-rides/bikeslider/js/bikeslider.js\")).then((obj) => obj.default.init());\r\n  },\r\n\r\n  motorcycleTabs: async () => {\r\n    await __webpack_require__.e(/*! import() | Motorcycle-Tabs */ \"Motorcycle-Tabs\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/re-rides/motorcycleTabs/js/motorcycleTabs.js */ \"./src/main/webpack/components/re-rides/motorcycleTabs/js/motorcycleTabs.js\")).then((obj) => obj.default.init());\r\n  },\r\n\r\n  highlights: async () => {\r\n    await __webpack_require__.e(/*! import() | highlight-card-container */ \"highlight-card-container\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/re-rides/highlights/js/highlights.js */ \"./src/main/webpack/components/re-rides/highlights/js/highlights.js\")).then((obj) => obj.default.init());\r\n  },\r\n\r\n  \"ride-info\": async () => {\r\n    await __webpack_require__.e(/*! import() | ride-info */ \"ride-info\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/re-rides/ridesinfoaccordian/js/ridesinfoaccordian.js */ \"./src/main/webpack/components/re-rides/ridesinfoaccordian/js/ridesinfoaccordian.js\")).then((obj) => obj.default.init());\r\n  },\r\n\r\n  \"ride-key-places\": async () => {\r\n    await __webpack_require__.e(/*! import() | ride-key-places */ \"ride-key-places\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/re-rides/rideskeyplaces/js/rideskeyplaces.js */ \"./src/main/webpack/components/re-rides/rideskeyplaces/js/rideskeyplaces.js\")).then((obj) => obj.default.init());\r\n  },\r\n\r\n  \"cmp-ride-share-header\": async () => {\r\n    await __webpack_require__.e(/*! import() | cmp-ride-share-header */ \"cmp-ride-share-header\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/re-rides/rideshareheader/js/rideshareheader.js */ \"./src/main/webpack/components/re-rides/rideshareheader/js/rideshareheader.js\")).then((obj) => obj.default.init());\r\n  },\r\n\r\n  \"testimonials-container\": async () => {\r\n    await __webpack_require__.e(/*! import() | testimonials-container */ \"testimonials-container\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/re-rides/ridestestimonials/js/ridestestimonials.js */ \"./src/main/webpack/components/re-rides/ridestestimonials/js/ridestestimonials.js\")).then((obj) => obj.default.init());\r\n  },\r\n\r\n  \"component-cards\": async () => {\r\n    await __webpack_require__.e(/*! import() | component-cards */ \"component-cards\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/re-rides/royalenfieldworld/js/royalenfieldworld.js */ \"./src/main/webpack/components/re-rides/royalenfieldworld/js/royalenfieldworld.js\")).then((obj) => obj.default.init());\r\n  },\r\n\r\n  \"iride-container\": async () => {\r\n    await __webpack_require__.e(/*! import() | iride-container */ \"iride-container\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/re-rides/iridegrid/js/irides.js */ \"./src/main/webpack/components/re-rides/iridegrid/js/irides.js\")).then((obj) => obj.default.init());\r\n  },\r\n\r\n  \"shop-section\": async () => {\r\n    await __webpack_require__.e(/*! import() | shop-section */ \"shop-section\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/re-rides/royal-enfield-shop-us/js/reshopus.js */ \"./src/main/webpack/components/re-rides/royal-enfield-shop-us/js/reshopus.js\")).then((obj) => obj.default.init());\r\n  },\r\n\r\n  // \"header\": async () => {\r\n  //   await import(\r\n  //     /* webpackChunkName: \"header\" */\r\n  //     \"../components/re-rides/navigation/header/js/header.js\"\r\n  //   ).then((obj) => obj.default.init());\r\n  // },\r\n\r\n\r\n\r\n  \"re-newsletter-signup__form\": async () => {\r\n    await __webpack_require__.e(/*! import() | re-newsletter */ \"re-newsletter\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/re-rides/renewsletter/js/_re-newsletter.js */ \"./src/main/webpack/components/re-rides/renewsletter/js/_re-newsletter.js\")).then((obj) => obj.default.init());\r\n  },\r\n\r\n  \"rides-info__card\": async () => {\r\n    await __webpack_require__.e(/*! import() | rides-info__card */ \"rides-info__card\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/re-rides/ridesdescription/js/ridedescription.js */ \"./src/main/webpack/components/re-rides/ridesdescription/js/ridedescription.js\")).then((obj) => obj.default.init());\r\n  },\r\n\r\n  \"rides-itinerary-container\": async () => {\r\n    await __webpack_require__.e(/*! import() | rides-itinerary-container */ \"rides-itinerary-container\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/re-rides/ride-itinerary/js/rideitinerary.js */ \"./src/main/webpack/components/re-rides/ride-itinerary/js/rideitinerary.js\")).then((obj) => obj.default.init());\r\n  },\r\n\r\n  \"news-and-media-container\": async () => {\r\n    await __webpack_require__.e(/*! import() | news-and-media-container */ \"news-and-media-container\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/re-rides/newsandmedia/js/newsandmedia.js */ \"./src/main/webpack/components/re-rides/newsandmedia/js/newsandmedia.js\")).then((obj) => obj.default.init());\r\n  },\r\n\r\n  \"dealer-container\": async () => {\r\n    await __webpack_require__.e(/*! import() | dealer-container */ \"dealer-container\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/re-rides/re-dealers-location/js/re-dealers-location.js */ \"./src/main/webpack/components/re-rides/re-dealers-location/js/re-dealers-location.js\")).then((obj) => obj.default.init());\r\n  },\r\n\r\n  \"motoverse-banner\": async () => {\r\n    await __webpack_require__.e(/*! import() | motoverse-banner */ \"motoverse-banner\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/re-rides/herostripe/js/herostirpe.js */ \"./src/main/webpack/components/re-rides/herostripe/js/herostirpe.js\")).then((obj) => obj.default.init());\r\n  },\r\n\r\n  \"test-follow-component\": async () => {\r\n    await __webpack_require__.e(/*! import() | test-follow */ \"test-follow\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/re-rides/rides-follow/js/test.js */ \"./src/main/webpack/components/re-rides/rides-follow/js/test.js\")).then((obj) => obj.default.init());\r\n  },\r\n\r\n  \"rides-calendar\": async () => {\r\n    await __webpack_require__.e(/*! import() | rides-calendar */ \"rides-calendar\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/re-rides/ridescalendar/js/ridescalendar.js */ \"./src/main/webpack/components/re-rides/ridescalendar/js/ridescalendar.js\")).then((obj) => obj.default.init());\r\n  },\r\n\r\n  \"book-test-ride-container\": async () => {\r\n    await __webpack_require__.e(/*! import() | book-test-ride-container */ \"book-test-ride-container\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/re-rides/booktestride/js/booktestride.js */ \"./src/main/webpack/components/re-rides/booktestride/js/booktestride.js\")).then((obj) => obj.default.init());\r\n  },\r\n\r\n  \"cmp-motorcyclecategoriescarousel\": async () => {\r\n    await __webpack_require__.e(/*! import() | cmp-motorcyclecategoriescarousel */ \"cmp-motorcyclecategoriescarousel\").then(__webpack_require__.t.bind(__webpack_require__, /*! ../components/re-rides/motorcyclecategoriescarousel/js/motorcyclecategoriescarousel.js */ \"./src/main/webpack/components/re-rides/motorcyclecategoriescarousel/js/motorcyclecategoriescarousel.js\", 23)).then((obj) => obj.default.init());\r\n  },\r\n\r\n  \"re-revamp__footer-fragment\": async () => {\r\n    await __webpack_require__.e(/*! import() | footer */ \"footer\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/re-rides/footer/js/footer.js */ \"./src/main/webpack/components/re-rides/footer/js/footer.js\")).then((obj) => obj.default.init());\r\n  },\r\n  \"re-revamp-v4-parent\": async () => {\r\n    await __webpack_require__.e(/*! import() | re-revamp-v4-parent */ \"re-revamp-v4-parent\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/re-rides/navigation/headermotorcycle/js/headermotorcycle.js */ \"./src/main/webpack/components/re-rides/navigation/headermotorcycle/js/headermotorcycle.js\")).then((obj) => obj.default.init());\r\n  },\r\n  \"video-js\": async () => {\r\n    await __webpack_require__.e(/*! import() | video-js */ \"video-js\").then(__webpack_require__.t.bind(__webpack_require__, /*! ../components/re-rides/videojs/js/video.min.js */ \"./src/main/webpack/components/re-rides/videojs/js/video.min.js\", 23)).then((obj) => obj.default || obj);\r\n  },\r\n};\r\n\r\n// Track loaded scripts to avoid duplicate loading\r\nconst alreadyLoadedScripts = {};\r\n\r\n// Configuration options for IntersectionObserver\r\nconst observerOptions = {\r\n  root: null, // use viewport as the root\r\n  rootMargin: \"200px\", // load components before they actually enter the viewport\r\n  threshold: 0.1, // trigger when at least 10% of the component is visible\r\n};\r\n\r\n// Dynamic Components Loader with Intersection Observer\r\nconst DynamicComponents = {\r\n  init: function () {\r\n    // Create an instance of IntersectionObserver\r\n    const observer = new IntersectionObserver(\r\n      this.handleIntersection,\r\n      observerOptions\r\n    );\r\n\r\n    // Find all registered components in the DOM\r\n    Object.keys(dynamicComponents).forEach((component) => {\r\n      const componentElement = document.querySelector(`.${component}`);\r\n\r\n      if (componentElement) {\r\n        // Store component name as a data attribute for reference in the callback\r\n        componentElement.dataset.componentName = component;\r\n\r\n        // Start observing the component\r\n        observer.observe(componentElement);\r\n      }\r\n    });\r\n\r\n    // Clean up the observer when page unloads\r\n    window.addEventListener(\"beforeunload\", () => {\r\n      observer.disconnect();\r\n    });\r\n\r\n    return {\r\n      // Expose method to manually disconnect the observer if needed\r\n      disconnect: () => observer.disconnect(),\r\n    };\r\n  },\r\n\r\n  // Callback function for IntersectionObserver\r\n  handleIntersection: function (entries, observer) {\r\n    entries.forEach((entry) => {\r\n      if (entry.isIntersecting) {\r\n        const componentElement = entry.target;\r\n        const component = componentElement.dataset.componentName;\r\n\r\n        // Check if the script is not already loaded\r\n        if (component && !alreadyLoadedScripts[component]) {\r\n          // Mark script as loaded\r\n          alreadyLoadedScripts[component] = true;\r\n\r\n          // Execute the dynamic import & init script\r\n          dynamicComponents[component]().catch((error) => {\r\n            console.error(`Error loading component ${component}:`, error);\r\n            // Optionally reset the loaded state on error to allow retrying\r\n            alreadyLoadedScripts[component] = false;\r\n          });\r\n\r\n          // Stop observing this component since it's been loaded\r\n          observer.unobserve(componentElement);\r\n        }\r\n      }\r\n    });\r\n  },\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (DynamicComponents);\r\n\n\n//# sourceURL=webpack://aem-maven-archetype/./src/main/webpack/ridesmain/dynamic-components.js?");

/***/ }),

/***/ "./src/main/webpack/ridesmain/main.scss":
/*!**********************************************!*\
  !*** ./src/main/webpack/ridesmain/main.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://aem-maven-archetype/./src/main/webpack/ridesmain/main.scss?");

/***/ }),

/***/ "./src/main/webpack/ridesmain/main.ts":
/*!********************************************!*\
  !*** ./src/main/webpack/ridesmain/main.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main/webpack/ridesmain/main.scss\");\n/* harmony import */ var _components_re_rides_utils_send_iframe_height_js_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/re-rides/utils/send-iframe-height.js.js */ \"./src/main/webpack/components/re-rides/utils/send-iframe-height.js.js\");\n/* harmony import */ var _components_re_rides_utils_send_iframe_height_js_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_re_rides_utils_send_iframe_height_js_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_re_rides_utils_screen_id_redirections_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/re-rides/utils/screen-id-redirections.js */ \"./src/main/webpack/components/re-rides/utils/screen-id-redirections.js\");\n/* harmony import */ var _components_re_rides_utils_disable_pinching_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/re-rides/utils/disable-pinching.js */ \"./src/main/webpack/components/re-rides/utils/disable-pinching.js\");\n/* harmony import */ var _components_re_rides_utils_disable_pinching_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_re_rides_utils_disable_pinching_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_re_rides_utils_cookies_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/re-rides/utils/cookies.js */ \"./src/main/webpack/components/re-rides/utils/cookies.js\");\n/* harmony import */ var _components_re_rides_utils_cookies_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_re_rides_utils_cookies_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_re_rides_utils_langNavigtion_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/re-rides/utils/langNavigtion.js */ \"./src/main/webpack/components/re-rides/utils/langNavigtion.js\");\n/* harmony import */ var _components_re_rides_utils_langNavigtion_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_re_rides_utils_langNavigtion_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_re_rides_utils_langStrip_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/re-rides/utils/langStrip.js */ \"./src/main/webpack/components/re-rides/utils/langStrip.js\");\n/* harmony import */ var _components_re_rides_utils_langStrip_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_re_rides_utils_langStrip_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_re_rides_utils_headerBreadcrumbs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/re-rides/utils/headerBreadcrumbs.js */ \"./src/main/webpack/components/re-rides/utils/headerBreadcrumbs.js\");\n/* harmony import */ var _components_re_rides_utils_headerBreadcrumbs_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_re_rides_utils_headerBreadcrumbs_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _dynamic_components_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dynamic-components.js */ \"./src/main/webpack/ridesmain/dynamic-components.js\");\n/* harmony import */ var _dynamic_components_styling_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dynamic-components-styling.js */ \"./src/main/webpack/ridesmain/dynamic-components-styling.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n    _dynamic_components_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"].init();\r\n    var dynamicCSS = _dynamic_components_styling_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"].init();\r\n});\r\n\n\n//# sourceURL=webpack://aem-maven-archetype/./src/main/webpack/ridesmain/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	!function() {
/******/ 		var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; }; });
/******/ 			}
/******/ 			def['default'] = function() { return value; };
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "/" + chunkId + "." + {"vendors-node_modules_handlebars_dist_cjs_handlebars_js-node_modules_firebase_app_dist_esm_ind-d6aede":"42f0887fb0d87192bb23","login-with-otp":"979bc622b591a58b8e27","rides-follow":"55798ce4907a81325ec1","hero-banner":"a6341d47bad9c895e6fd","whats-trending":"d79ab5dcf3964972da98","royal-enfield-hero":"f2d3a7648ed6ab587ff1","marquee-rides":"6595064d036f06dee8c9","legacy-component":"0a549e7eaaf7cf00b73d","ridesinfo_nav":"c94e9ff1f8ab84c3fc89","services-container":"022a71f7db06e3cd27c9","Motorcycle-Tabs":"2c313578e1dfcecf6cf6","highlight-card-container":"d6c8539869ddfbfc1f7c","ride-info":"34b4f3749b96826319cf","ride-key-places":"0d53589fd6379e727797","cmp-ride-share-header":"42fb18c987caefc666b1","testimonials-container":"f8124125847e92210ec5","component-cards":"577f7152c1c673b7dea5","iride-container":"85709d46d66cbf91009b","shop-section":"2367efe427d581511f4e","re-newsletter":"db858f1517adf07ea6e6","rides-info__card":"0a186036bc5a8dd63db1","rides-itinerary-container":"5436a553bdfa854ec390","news-and-media-container":"feed34fdeb8c4011c42c","dealer-container":"9f9252d024fc7fc42052","motoverse-banner":"31097ab2277f3ea0c0f9","test-follow":"917431d554111d786354","rides-calendar":"58374a3eb03ba78ca3e1","book-test-ride-container":"128287907cb7c3a73f4d","cmp-motorcyclecategoriescarousel":"c2f062b4defc6caa1202","footer":"c1145d27236d79ab31cb","re-revamp-v4-parent":"c1589a4ef5cf38dc53d4","video-js":"aaa6783048a364a2d117","css-rides-calendar":"2ec986f90c9fcbdf831d"}[chunkId] + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "/" + chunkId + "." + "2fe7ba328b98e3a90281" + ".css";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "aem-maven-archetype:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "./rides-landing_files";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	!function() {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = function(chunkId, fullhref, oldTag, resolve, reject) {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			if (__webpack_require__.nc) {
/******/ 				linkTag.nonce = __webpack_require__.nc;
/******/ 			}
/******/ 			var onLinkComplete = function(event) {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && event.type;
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + errorType + ": " + realHref + ")");
/******/ 					err.name = "ChunkLoadError";
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = function(href, fullhref) {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = function(chunkId) {
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			"ridesmain": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = function(chunkId, promises) {
/******/ 			var cssChunks = {"css-rides-calendar":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(function() {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, function(e) {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"ridesmain": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkaem_maven_archetype"] = self["webpackChunkaem_maven_archetype"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main/webpack/ridesmain/main.ts");
/******/ 	
/******/ })()
;