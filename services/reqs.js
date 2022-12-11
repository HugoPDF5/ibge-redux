import api from "./api";

export const callAPI = {
    getAllStates: async () => {
        try {
            const { data } = await api.get("estados?orderBy=nome");
            return data;
        } catch (error) {
            console.log(error);
            return [];
        }
    },

    getCountiesByUf: async (uf) => {
        try {
            const { data } = await api.get(`estados/${uf}/municipios`);
            return data;
        } catch (error) {
            console.log(error);
            return [];
        }
    },

    getDistricts: async (county) => {
        try {
            const { data } = await api.get(`municipios/${county}/distritos`);
            // return data
            return data.map(item => {
                return {
                    name: item.nome,
                    microregion: item.municipio.microrregiao.nome,
                    mesoregion: item.municipio.microrregiao.mesorregiao.nome,
                    uf: item.municipio.microrregiao.mesorregiao.UF.nome,
                    region: item.municipio.microrregiao.mesorregiao.UF.regiao.nome
                }
            });
        } catch (error) {
            console.log(error);
            return [];
        }
    },
};
