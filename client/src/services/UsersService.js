import Api from '@/services/Api'

export default {
    index() {
        return Api().get('mouses')
    },
    show(mouseId){
        return Api().get('mouse/'+mouseId)
    },
    post(mouse){
        return Api().post('mouse', mouse)
    },
    put(mouse){
        return Api().put('mouse/'+mouse.id, mouse)
    },
    delete(mouse){
        return Api().delete('mouse/'+mouse.id, mouse)
    },
}