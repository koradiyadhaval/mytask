import { EducationInformation } from "../../../TypesAndInterfaces/CandidateInterface"
import { AppView } from "../../AppView"
import { TextView } from "../../TextView";
import english from '../../../Util/string/english/index.json'
import {Styles} from './style';

interface params{
item:EducationInformation
}

export const EducationViewItem=({item}:params)=>{


    const PrintInfo=({keyname,value}:{keyname:string,value:string})=>{


        return (
            <AppView style={Styles.rowview}>
                <TextView style={Styles.textname}>
            {keyname}
                </TextView>
                <TextView style={Styles.textvalue}>
            {value}
            </TextView>
            </AppView>
        )
    }

    return (
        <AppView style={Styles.MainView}>
            <PrintInfo keyname={english.label_course_name} value={item.cource_name}/>
            <PrintInfo keyname={english.label_course_uni} value={item.uni_name}/>
            <PrintInfo keyname={english.label_course_start} value={item.start_years+"-"+item.end_year}/>
            <PrintInfo keyname={english.label_course_location} value={item.location }/>


        
        </AppView>
    )
}