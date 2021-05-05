function Car(containerId) {
    this._engine = new Engine();
    this._gearBox = new GearBox();

    const that = this;

    this._view = new CarView(
        function () {
            that.start();
        }, function () {
            console.log('any other listener can be added')
        });

    this._view.render(containerId);

}

Car.prototype = {
    start: function () {
        const res = this._engine.start(this._view);
        res ? this._carStarted() : this._cantStart()
    },

    _carStarted: function () {
        this._view.setStatus('car have started');
        this._view.carStarted();
        this._gearBox.start(this._view._gearBox);
    },

    _cantStart: function () {
        this._view.setStatus('something is wrong');
    }
}