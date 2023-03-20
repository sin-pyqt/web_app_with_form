const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            database: '',
            entity: '',
            searchUsing: '',
            uniport_id: '',
            smiles_id: '',
            smiles_array: [],
        }
    },
    watch: {
        database(oldVal, newVal) {
        },
    },
    methods: {
        baseInput() {
            if (this.searchUsing === "Uniport ID") {
                this.showUniportID_dialog()
            }
            else if (this.searchUsing === "SMILES") {
                this.showSmiles_dialog()
            }
            else if (this.searchUsing === "Sequence") {
                this.showSequence_dialog()
            }
            else {

            }
        },
        removeSmilefromDisplay(item) {
            function arrayRemove(arr, value) {
                return arr.filter(function (val) {
                    return val != value;
                });
            }
            this.smiles_array = arrayRemove(this.smiles_array, item);
        },
        addSmiletoDisplay() {
            this.smiles_array.push(this.smiles_id),
                this.smiles_id = ''
        },
        change_1() {
            document.getElementById("step_2").style.display = "block";
        },
        change_2() {
            document.getElementById("step_3").style.display = "block";
        },
        showUniportID_dialog() {
            document.getElementById("uniport_ID_dialog").style.display = "block";
            document.getElementById("smiles_dialog").style.display = "none";
            document.getElementById("sequence_dialog").style.display = "none";
        },
        showSmiles_dialog() {
            document.getElementById("uniport_ID_dialog").style.display = "none";
            document.getElementById("smiles_dialog").style.display = "block";
            document.getElementById("sequence_dialog").style.display = "none";
        },
        showSequence_dialog() {
            document.getElementById("uniport_ID_dialog").style.display = "none";
            document.getElementById("smiles_dialog").style.display = "none";
            document.getElementById("sequence_dialog").style.display = "block";
        },
        showResult() {
            document.getElementById("resultFrame").src = "/uniport?uniport_id=" + this.uniport_id;
            // wait till iframe is loaded
            document.getElementById('resultFrame').onload = function () {       
                setTimeout(() => {
                    document.getElementById("input").style.display = "none";
                    document.getElementById("result").style.display = "block";
                }, 10);
            }
        },
        hideResult() {
            document.getElementById("input").style.display = "block";
            document.getElementById("result").style.display = "none";
        },
        reset() {
            this.database = '';
            this.entity = '';
            this.searchUsing = '';
            this.uniport_id = '';
            document.getElementById("step_2").style.display = "none";
            document.getElementById("step_3").style.display = "none";
            document.getElementById("uniport_ID_dialog").style.display = "none";
            document.getElementById("smiles_dialog").style.display = "none";
            document.getElementById("sequence_dialog").style.display = "none";
        }
    },
}).mount('#app')
