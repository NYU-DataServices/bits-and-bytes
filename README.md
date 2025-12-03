# bits-and-bytes

This is an archive for Bits and Bytes, The NYU Data Services Newsletter. The archive does two things:
1. It stores PDF copies (See: [`/newsletters`](newsletters))
2. It contains simple site code (in 11ty) used to publish links to webviews of the newsletter via Github Pages (See: https://nyu-dataservices.github.io/bits-and-bytes/)

## Get Started

### Add a Newsletter to the Archive

> Note: You should be able to do this directly on GitHub in your browser if you like! 

1. Download the PDF copy of the newsletter, rename it with the convention `YYY-MM_BitsAndBytes.pdf`, and upload to this repo in the [`/newsletters`](newsletters) folder.
2. Go to [src/index.html](https://github.com/NYU-DataServices/bits-and-bytes/blob/4be31ee275360fcb86c9eaccf3ea5eae54ae6317/src/index.html#L5) and find the beginning of the `newsletters` YAML list at the top of the file. (This YAML list is what powers the "Newsletter Archive" links on https://nyu-dataservices.github.io/bits-and-bytes/). Make a new entry at the very top with the newsletter publish date as the `label` (`Month YYYY` format, e.g., `December 2024`) and `webview` as the direct url. Both values should be in quotes. E.g.,
   ```yaml
   newsletters:
   - label: 'MY NEW LABEL'
     webview: 'MY WEBVIEW LINK HERE'
   - label: 'February 2025'
     webview: 'https://t.e2ma.net/webview/n5f96m/50c415096f22e83dca13a451257b9d67'
   ...
   ```
4. Commit the changes directly to `main` and wait for the site to republish/deploy. (You can check progress [here](https://github.com/NYU-DataServices/bits-and-bytes/actions).) Then go to the [live site](https://nyu-dataservices.github.io/bits-and-bytes/) and confirm it's there. That should be it!

### Local Development

### Prerequisites
- Git
- Node and NPM (via ASDF recommended)

### Steps

1. Clone the repo and cd into it
2. Install code dependencies with `npm install`
3. Run local server with `npm run start`
