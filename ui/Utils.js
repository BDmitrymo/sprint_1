function $qs(sel, parent = null) {
    return parent
        ? parent.querySelector(sel)
        : document.querySelector(sel)
}

function $qsAll(sel, parent = null) {
    return parent
        ? parent.querySelectorAll(sel)
        : document.querySelector(sel)
}

function html($el, $root) {
    if ($el) {
        if ($root) $el.insertAdjacentHTML('beforeend', $root)
    }
}

function clearHTML(el) {
    const $el = el.nodeName ? el : $qs(el)
    $el.innerHTML = ''
}

function stateModal(sel, state) {
    $(sel).modal(state)
}

export {$qs, $qsAll, html, clearHTML, stateModal}