# Changelog

## [0.0.1] - 2025-08-03
### Added
- Created react + vite app
- Add ```/login``` route for login page
- Add react-router-dom
- Add changelog file

### Fixed
- Issue with vite version 7. Downgraded to vite 6

## [0.0.2] - 2025-08-03
### Added
- Add routes ```/login, /holdings, /orderbook, /positions```
- Add ```zustand``` for state management. Use  ```zustand/middleware``` to persist data in localStorage
- Add ```react-hook-form``` for forms and ```zod``` for validations
- Add ```react-hot-toast``` for toasts/notifications
- Add ```react-router-dom``` for navigation
- Create different initial components like  ```Button, Input, Card```
- Add ```cn``` function to manage and combine classes
- Add validation for loggedin and not loggedin users

### Fixed
- Issue with persisting data across pages. Fixed using ```zustand/middleware```
- Typescript issues

## [0.0.3] - 2025-08-04
### Added
- Add change button to change broker
- Add holdings table and show dummy data

