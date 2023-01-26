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
            resp_uniport: [],
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
        async getUniportdata() {
            try {
                let response = await fetch("https://www.ebi.ac.uk/chembl/api/data/target/search?limit=1000&offset=0&format=json&q="+this.uniport_id);
                temp = await response.json();
                this.resp_uniport = temp.targets
                console.log(temp)
            } catch (error) {
                console.log(error);
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
