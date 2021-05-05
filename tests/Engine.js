function Engine() {
    console.log('engine')
}

Engine.prototype.start = function (view) {
    let random = Math.random();
    if (random > 0.5) {
        const self = this.crush.bind(this, view)
        setTimeout(self, 5000)
        return true;
    } else {
        return false;
    }

}

Engine.prototype.crush = function(view) {
    view.setStatus('the engine crushed!');
    view.carStarted();
    for (const el of view._gearBox) {
        el.innerHTML = 'N';
    }
}