import {ActivityContentRoleItem} from "@/utils/Interfaces";
import Role from "@/app/activities/[id]/_component/Role";

const MemberInfo = ({role}:{ role: Array<ActivityContentRoleItem>}) => {

    return (
        <div className="mt-[10px]">
            {
                role.map(({member, title}: ActivityContentRoleItem) => (
                    <div className="flex flex-col">
                        <Role member={member} title={title}/>
                    </div>
                ))
            }
        </div>
    );
}

export default MemberInfo;