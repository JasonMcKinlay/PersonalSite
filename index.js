import { createRoot } from 'react-dom/client';
import express from "express";

const port = 3000;
const app = express();

document.body.innerHTML = '<div id="app"></div>';
const root = createRoot(document.getElementById('app'));

app.get("/", (req, res) => {
    root.render(<h1>Hello, world</h1>);
})

app.listen(port, console.log(`Server listening on port ${port}.`));