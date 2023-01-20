const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            database: '',
            entity: '',
            searchUsing: '',
            uniport_id: '',
        }
    },
    watch: {
        database(oldVal, newVal) {
        },
        searchUsing(oldVal, newVal) {
            if (oldVal === "Uniport ID") {
                this.showUniportID_dialog()
            }
            else if (oldVal === "SMILES") {
                this.showSmiles_dialog()
            }
            else if (oldVal === "Sequence") {
                this.showSequence_dialog()
            }
            else {

            }
        },
    },
    methods: {
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
