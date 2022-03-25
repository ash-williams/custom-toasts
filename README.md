# Simple Custom Toast Library

Not mine, I have followed the tutorial [here](https://www.youtube.com/watch?v=HhpbzPMCKDc) and then added extra bits for color sytyling.

## Usage

Create a basic Toast by importing the module and creating a new Toast object.

```
    import Toast from "./Toast.js"

    new Toast({
        text:"Hello World"
    })
```

## Other settings

| Setting | Default | Description | 
| ------- | ------- | ----------- | 
| autoClose | `5000` | Will automatically close the Toast after a set number of milliseconds |
| position | `"top-right"` | Allows you to set the position of the Toast. One of `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right` |
| onClose | `() => {}` | Allows you to execute a function when the Toast closes | 
| canClose | `true` | Allows you to determine whether a Toast can close once it is displayed |
| showProgress | `true` | Shows a progress time which will indicate to the user how long until the Toast closes |
| progressColor | `"blue"` | Allows you to set the color of the progress bar. Can be any CSS color value (Note: doesn't work if you are using the variant setting) |
| variant | `"normal"` | Allows you to optionally set the style based on preset colors (like Bootstrap). Can be `"success"`, `"error"`, `"warning"`, or `"normal"` |
| style | null | Allows you to set other CSS style properties. Include all styles in a single string. E.g., `style="font-weight:bold;font-family:Arial;"` |

