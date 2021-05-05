function CarView(...ownerFunctions) {
    this._ownerFunctions = [...ownerFunctions];
}

CarView.prototype = {
    render: function (containerId) {
        const garage = document.getElementById('garage');
        const div = document.createElement('div');
        div.id = containerId;
        garage.append(div);
        createCar();
        function createCar() {
            const container = document.getElementById(containerId);
            container.innerHTML = `
            <div class="car">
                <div class="info-panel">
                    <label for="">Status: </label><span data-role='stat'>off</span>
                    </div>
                <div class="controls">
                    <input data-role="start-car" type="button" value="Start">
                    <hr>
                    <label for="">Gear box: </label> <span data-role="gear-box-value">N</span>
                </div>
            </div>
            `;
        }
        this._status = document.getElementById(containerId).querySelectorAll("[data-role='stat']");
        this._startButton = document.getElementById(containerId).querySelectorAll("[data-role='start-car']");
        this._gearBox = document.getElementById(containerId).querySelectorAll("[data-role='gear-box-value']");

        const bindStartListener = this._carStartListener.bind(this)
        this._processElements(this._startButton, function (item) {
            item.addEventListener('click', bindStartListener)
        })
    },
    setStatus: function (stat) {
        function drawStatus(item) {
            item.innerHTML = stat;
        }
        this._processElements(this._status, drawStatus)
    },

    carStarted: function() {
        this._processElements(this._startButton, (item) => { 
            // item.classList.add('hide') 
            if (item.disabled) {
                item.disabled = false;
            }else {
                item.disabled = true;
            }
        })
    },

    _processElements: function (arr, processor) {
        for (const el of arr) {
            processor(el)
        }
    },

    _carStartListener: function (event) {
        if (this._ownerFunctions != null) {
            for (const el of this._ownerFunctions) {
                el();
            }
        }
    }
}
