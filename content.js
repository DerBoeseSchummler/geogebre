const cheatsButton = document.createElement("button")
cheatsButton.innerHTML = "Cheatssheet"
cheatsButton.classList.add("dialogContainedButton")
document.getElementById("buttonsID").insertBefore(cheatsButton, document.getElementById("buttonsID").childNodes[2])

document.head.innerHTML += `<script src='https://www.maths.nottingham.ac.uk/plp/pmadw/LaTeXMathML.js'></script>`

const cheatPanel = document.createElement("div")
cheatPanel.innerHTML = `<div id='cheatsheet-content'></div>
                        <button class='dialogContainedButton' style='margin: 4px;background-color: red;' id='cheatsPanel-close'>Close</button>`
cheatPanel.style.display = "flex"
cheatPanel.style.flexDirection = "column"
cheatPanel.style.position = "absolute"
cheatPanel.style.top = "112px"
cheatPanel.style.right = "8px"
cheatPanel.style.borderRadius = "4px"
cheatPanel.style.borderWidth = "2px"
cheatPanel.style.borderStyle = "solid"
cheatPanel.style.borderColor = "#6557D2"
cheatPanel.style.backgroundColor = "#fff"
cheatPanel.style.visibility = "hidden"
cheatPanel.style.zIndex = 99999
cheatPanel.style.overflow = "scroll"

document.getElementById("buttonsID").appendChild(cheatPanel)

function insertToTextArea(text) {
    const textArea = document.getElementsByClassName("hiddenCopyPasteLatexArea0")[0]
    textArea.value = text
}

cheatsButton.addEventListener("click", (e) => {
    cheatPanel.style.visibility = "visible"
})

document.getElementById("cheatsPanel-close").addEventListener("click", (e) => {
    cheatPanel.style.visibility = "hidden"
})

document.getElementById("cheatsheet-content").innerHTML = `
<h2>pq-Formel</h2>
<math>
<mrow>
    <msub>
        <mi>x</mi><mn>1,2</mn>
    </msub>
    <mo>=</mo>
    <mo>-</mo>
    <mfrac><mi>p</mi><mn>2</mn></mfrac>
    <mo>±</mo>
    <msqrt>
        <msup>
            <mfenced>
                <mfrac><mi>p</mi><mn>2</mn></mfrac>
            </mfenced>
            <mn>2</mn>
        </msup>
        <mo>-</mo><mi>q</mi>
    </msqrt>
</mrow>
</math>
<br>
<br>
<h2>abc-Formel</h2>
<math>
    <mrow>
        <msub>
            <mi>x</mi><mn>1,2</mn>
        </msub>
        <mo>=</mo>
        <mfrac>
            <mfenced>
                <mo>-</mo>
                <mi>b</mi>
                <mo>±</mo>
                <msqrt>
                    <msup>
                        <mi>b</mi>
                        <mn>2</mn>
                    </msup>
                    <mo>-</mo>
                    <mo>4</mo>
                    <mi>a</mi>
                    <mi>c</mi>
                </msqrt>
            </mfenced>
            <mfenced>
                <mo>2</mo>
                <mi>a</mi>
            </mfenced>
        </mfrac>
    </mrow>
</math>
<br>
<br>
<hr>
<br>
<h2>in ...-Form umwandeln</h2>
<br>
<br>
<h3>Faktorisierte Form</h3>
<pre><code>factor()</code></pre>
<br>
<br>
<h3>Allgemeine Form</h3>
<pre><code>expand()</code></pre>
<br>
<br>
<h3>Scheitelpunktform</h3>
<pre><code>completesquare()</code></pre>
<br>
<br>
`