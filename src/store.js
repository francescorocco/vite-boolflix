import { reactive } from 'vue';

export const store = reactive(
    {
        filmList:[],
        listOfSeries:[],
        search:'',
    }
);