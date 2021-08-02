import { ActionBar, MobileFilter } from "./storeActionBar.style";
import { Filter } from "@styled-icons/bootstrap/Filter";

const StoreActionBar = () => {
    return (
        <>
            <ActionBar>
                <h1>Action Bar</h1>
            </ActionBar>
            <MobileFilter>
                <Filter size="20" />
            </MobileFilter>
        </>
    );
};

export default StoreActionBar;
