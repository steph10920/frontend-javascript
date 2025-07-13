/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("{\r\n// Director class\r\nvar Director = /** @class */ (function () {\r\n    function Director() {\r\n    }\r\n    Director.prototype.workFromHome = function () {\r\n        return 'Working from home';\r\n    };\r\n    Director.prototype.getCoffeeBreak = function () {\r\n        return 'Getting a coffee break';\r\n    };\r\n    Director.prototype.workDirectorTasks = function () {\r\n        return 'Getting to director tasks';\r\n    };\r\n    return Director;\r\n}());\r\n// Teacher class\r\nvar Teacher = /** @class */ (function () {\r\n    function Teacher() {\r\n    }\r\n    Teacher.prototype.workFromHome = function () {\r\n        return 'Cannot work from home';\r\n    };\r\n    Teacher.prototype.getCoffeeBreak = function () {\r\n        return 'Cannot have a break';\r\n    };\r\n    Teacher.prototype.workTeacherTasks = function () {\r\n        return 'Getting to work';\r\n    };\r\n    return Teacher;\r\n}());\r\n// Factory function to create an employee\r\nfunction createEmployee(salary) {\r\n    if (typeof salary === 'number' && salary < 500) {\r\n        return new Teacher();\r\n    }\r\n    return new Director();\r\n}\r\n// Type predicate to check if employee is a Director\r\nfunction isDirector(employee) {\r\n    return employee.workDirectorTasks !== undefined;\r\n}\r\n// Execute the right work method\r\nfunction executeWork(employee) {\r\n    if (isDirector(employee)) {\r\n        return employee.workDirectorTasks();\r\n    }\r\n    else {\r\n        return employee.workTeacherTasks();\r\n    }\r\n}\r\n// Function to return teaching subject\r\nfunction teachClass(todayClass) {\r\n    switch (todayClass) {\r\n        case 'Math':\r\n            return 'Teaching Math';\r\n        case 'History':\r\n            return 'Teaching History';\r\n        default:\r\n            throw new Error(\"Unknown subject: \".concat(todayClass));\r\n    }\r\n}\r\n// Example usage\r\nconsole.log(createEmployee(200)); // Teacher {}\r\nconsole.log(createEmployee(1000)); // Director {}\r\nconsole.log(createEmployee('$500')); // Director {}\r\nconsole.log(executeWork(createEmployee(200))); // Getting to work\r\nconsole.log(executeWork(createEmployee(1000))); // Getting to director tasks\r\nconsole.log(teachClass('Math')); // Teaching Math\r\nconsole.log(teachClass('History')); // Teaching History\r\n\n\n//# sourceURL=webpack://task_0/./js/main.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;