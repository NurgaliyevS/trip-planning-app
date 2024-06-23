import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export const useTrip = () => {
    const [userStatus, setUserStatus] = useState("");

    const { data: session } = useSession();

    const sessionId = session?.user?.id;

    const getUserById = async (id) => {
        try {
            const response = await axios.get("/api/users/user?id=" + id);
            const user = response.data?.data;
            if (user?.user_status) {
                setUserStatus(user.user_status);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (sessionId) {
            getUserById(sessionId);
        }
    }, [sessionId]);

    return userStatus;
};
