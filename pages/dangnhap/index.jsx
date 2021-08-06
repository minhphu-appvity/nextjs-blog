import Layout from '../layout/Layout'
import { FormControl, InputLabel, Input, FormGroup,Button   } from '@material-ui/core';
import styles from '../../styles/page/DangNhap.module.scss'  
const DangNhap = () => {
    return (
        <>
            <Layout />
            <div  className={styles.matFormMain}>
                <form className={styles.matFormContent}> 
                    <FormGroup >
                        <FormControl>
                            <InputLabel htmlFor="my-input">Tài khoản</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" />
                        </FormControl>
                    </FormGroup>
                    <FormGroup >
                        <FormControl>
                            <InputLabel htmlFor="my-input">Mật khẩu</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" />
                        </FormControl>
                    </FormGroup>
                    <div className={styles.matFormAction}>
                        <Button color='primary' variant="outlined">Đăng nhập</Button>
                    </div>
                </form>
            </div>


            <h2>Page đăng nhập</h2>
        </>
    )
}
export default DangNhap