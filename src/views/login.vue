<style lang="less">
    @import './login.less';
    @import '../styles/loading.less';
</style>

<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="userName">
                            <Input v-model="form.userName" placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                                <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleSubmit" type="primary" long>登录</Button>
                        </FormItem>
                    </Form>
                    <p class="login-tip">输入任意用户名和密码即可</p>
                </div>
            </Card>
        </div>

        <Spin fix v-if="spinShow">
            <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
            <div>登录中...</div>
        </Spin>

    </div>
</template>

<script>
import Cookies from 'js-cookie';
export default {
    data () {
        return {
            // spinShow: this.$store.state.message.loading,
            spinShow: false,
            form: {
                userName: 'iview_admin',
                password: ''
            },
            rules: {
                userName: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                    { type: 'string', min: 6, message: '密码长度不少于6位', trigger: 'blur' }
                ]
            }
        };
    },
    mounted () {
        /*let self = this;
        console.log(self.$store.state.message.loading);
        this.$nextTick(function () {
            console.log('顺序3');
        });
        console.log('顺序0');
        self.$Message.success('这是什么鬼?');*/
    },
    methods: {
        handleSubmit () {
            let self = this;
            self.spinShow = true;
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    Cookies.set('user', this.form.userName);
                    Cookies.set('password', this.form.password);
                    this.$store.commit('setAvator', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg');
                    if (this.form.userName === 'iview_admin') {
                        Cookies.set('access', 0);
                    } else {
                        Cookies.set('access', 1);
                    }
                    this.$router.push({
                        name: 'home_index'
                    });
                }
            });
        }
    },
    created () {
        // console.log('顺序1');
    },
    watch: {
        // spinShow: function (val, oldVal) {
        //     console.log('val：' + val);
        // }
    }
};
</script>

<style>

</style>
