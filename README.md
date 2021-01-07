# rainmatter.org

Run `hugo` to compile the static site into the `public_html` directory.

### Data
Entries for projects, grants, people, investments etc. pages are YAML data files in the `/data` dir.

### Blog
Recent blog entries on the homepage is rendered by JS making an HTTP request (in main.js) to `/blog/feed/json` (WordPress plugin that produces a JSON/RSS feed) and then rendering it in index.html
