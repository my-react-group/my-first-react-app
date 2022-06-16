一、跳转传参的两种取参数方式

1、navigate('/about?id=100')
取参方式： 
let [params] = useSearchParams();
let id = params.get('id');


2、navigate('/about/100')
取参方式： 
let params = useParams()
let id = params.id;