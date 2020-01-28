import React from 'react';
import User from './User'
export default function Users() {
    return(
        <div className="right">
        
            <User 
                src="https://pbs.twimg.com/profile_images/998476580073627649/8XN0oH_b_400x400.jpg"
                alt="prince"
                name="Dilys_carapuz_Shinoda" />

            <div className="users__block">
                <User 
                    src="https://pbs.twimg.com/profile_images/998476580073627649/8XN0oH_b_400x400.jpg"
                    alt="prince"
                    name="Dilys_carapuz_Shinoda" 
                    min/>
                <User 
                    src="https://pbs.twimg.com/profile_images/998476580073627649/8XN0oH_b_400x400.jpg"
                    alt="prince"
                    name="Dilys_carapuz_Shinoda" 
                    min/>
                <User 
                    src="https://pbs.twimg.com/profile_images/998476580073627649/8XN0oH_b_400x400.jpg"
                    alt="prince"
                    name="Dilys_carapuz_Shinoda" 
                    min/>
                <User 
                    src="https://pbs.twimg.com/profile_images/998476580073627649/8XN0oH_b_400x400.jpg"
                    alt="prince"
                    name="Dilys_carapuz_Shinoda" 
                    min/>

            </div>
        </div>
    )
}