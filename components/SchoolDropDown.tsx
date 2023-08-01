import {AiFillCaretDown, AiFillCaretUp} from "react-icons/ai";
import {useState} from "react";
import list from "../public/list_of_cities.json";
import Select from "react-select"

export default function SchoolDropDown(){

    const [isOpen, setIsOpen] = useState(false)

    return(
        <div>
            <Select placeholder="Школа" className="w-[250px] font-aqum_2 text-[#7009F4]/50 rounded" options={list} />
        </div>
    );

}