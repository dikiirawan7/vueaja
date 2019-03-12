<template>
    <div>
        <v-app>
            <v-text-field
            v-model="isi"
            label="Regular"
            placeholder="Placeholder"
            @keyup="tulis(isi)"
          ></v-text-field>
          <p>{{isi}}</p>
        </v-app>
        
        <p>{{isi}}</p>
        <h1>{{author}}</h1>
        <h2>{{this.$store.state.link}}</h2>
        <div v-for="school in sekolah" :key="school.id">
            <p>{{school.kelas}}</p>

        </div>
        <h3>{{mencariHobiBerdasarkanId(2).jenis}}</h3>
        <button @click.prevent="tambah()" style="padding:10px;background-color:red">{{this.nilai}}</button>
        <button @click.prevent="tambahpakaimutation()" style="padding:10px;background-color:red">{{this.$store.state.count}}</button>
    </div>
</template>
<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
export default {
    data(){
        return{
           isi:'',
           nilai:0
        }
    },
    name:'CobaVuex',
    computed:{
        ...mapState([
            'author',
            'sekolah',
            'count'
        ]),
        ...mapGetters([
            'mencariHobiBerdasarkanId'
        ]),
        ...mapMutations([
            'increment'
        ])
    },
    methods:{
        tambah(){
            this.nilai=this.nilai+1 
        },
        tambahpakaimutation(){
            this.$store.commit('increment')
        },
        tulis(isi){
            if(!isi){
                alert('tidak boleh kosong');
            }
            else{
            this.isi=isi;
            }
        }
    }
}
</script>

