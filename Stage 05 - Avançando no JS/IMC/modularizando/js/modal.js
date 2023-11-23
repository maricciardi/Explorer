export const modal = {
    wrapper: document.querySelector(".modal-wrapper"),
    message: document.querySelector(".modal .title span"),
    buttonClose: document.querySelector(".modal button.close"),

    open: function() {
        modal.wrapper.classList.add("open")
    },
    close() {modal.wrapper.classList.remove("open")}
}

modal.buttonClose.onclick = () => {
    modal.close()
}

window.addEventListener('keydown', function(event){
    //console.log(event.key) => para ver como aparece no console as teclas pressionadas
    if(event.key === 'Escape') {
        modal.close()
    }
})