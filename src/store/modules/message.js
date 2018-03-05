// 遮蔽罩和信息通知相关处理
const message = {
    state: {
        //遮蔽罩标识
        loading: false
    },
    mutations: {
        loadingHiddn (state){
            state.loading = false;
        },
        loadingShow (state){
            state.loading = true;
        }
    }
};

export default message;
