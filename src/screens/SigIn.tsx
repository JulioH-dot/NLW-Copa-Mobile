import { Center, Text, Icon } from "native-base";
import {Fontisto} from '@expo/vector-icons';
import Logo from '../assets/logo.svg';
import { Button } from '../components/button';
import { useAuth } from "../hooks/useAuth";


export function SigIn(){
    const {signIn, user} = useAuth();



    return(
        <Center flex = {1} bgColor="gray.900" p = {7}>
            <Logo width={212} height={40} />

            <Button
                title = "ENTRAR COM O GOOGLE" 
                leftIcon={<Icon as = {Fontisto} name='google' color='white' size='md'/> }
                type= "SECONDARY"
                isLoading ={false} 
                mt={12}  
                onPress = {signIn}
            />

            <Text color = "white" textAlign='center' mt={4}>
            Não utilizamos nenhuma informação {'\n'}além do seu e-mail para criação de sua conta.
            </Text>

        </Center>
    )
}