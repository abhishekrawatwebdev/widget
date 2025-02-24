# HelpWidget

HelpWidget is a React component that provides a customizable floating widget for websites. It fetches its configuration dynamically from a DynamoDB database and can display buttons that redirect users, open modals, or initiate calls.

## Features
- Toggleable floating widget
- Dynamically fetched configuration based on domain
- Supports redirection, modal popups, and call actions
- Customizable button styles and icons
- Mobile-friendly behavior

## Installation

Clone the repository and install dependencies:

```sh
npm install
```

## Environment Variables

Create a `.env` file in the root directory and add the following variable:

```sh
REACT_APP_SERVER_BASE_URL=<your_server_base_url>
```

This should point to the backend API that fetches widget configurations from DynamoDB.

## Configuration Structure

The widget retrieves its settings from a DynamoDB entry structured as follows:

```json
{
 "domain": "example.com",
 "buttons": [
  {
   "action_type": "REDIRECT",
   "background_color": "#ffffff",
   "button_label": "Visit Website",
   "disabled": false,
   "icon": "globe",
   "redirect_url": "https://example.com",
   "text_color": "#000000"
  }
 ],
 "main_toggle_button": {
  "background_color": "#01506a",
  "height": "4rem",
  "icon": "https://example.com/icon.png",
  "is_enabled": true,
  "position": {
   "bottom": "20px",
   "right": "20px",
   "type": "bottom-right"
  },
  "tooltip": "How can I help you?",
  "width": "4rem"
 }
}
```

## Usage

Import and use the `HelpWidget` component in your application:

```jsx
import HelpWidget from "./HelpWidget";

function App() {
  return (
    <div>
      <HelpWidget />
    </div>
  );
}

export default App;
```

## Widget Behavior
- Fetches configuration based on the current domain.
- Displays buttons with defined actions (`REDIRECT`, `MODAL`, or `CALL`).
- Supports copy-to-clipboard functionality for phone numbers if not on a mobile device.
- Shows a tooltip on first load.

## Customization
- Styles are mapped from the configuration.
- Icons are fetched dynamically.
- The position, color, and size of the main toggle button can be modified in the DynamoDB configuration.

## License
This project is licensed under the MIT License.

