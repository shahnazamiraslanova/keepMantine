import { NavLink } from "@mantine/core";
import {
  IconCircleDashedCheck,
  IconClipboardText,
  IconClockPause,
  IconInfoCircle,
  IconPencil,
} from "@tabler/icons-react";

const Header = () => {
  return (
    <div className=" w-[85%] mx-auto">
      <div className="text-[#394E75] text-xl font-bold  flex justify-between ">
        <div className="flex items-center flex-col">
          <NavLink
            className="w-[200px]  "
            href=""
            label="Tapşırıqlar paneli"
            childrenOffset={10}
          >
            <NavLink
              href="tasks"
              label={
                <div className="flex items-center gap-2">
                  <IconPencil size="1rem" stroke={1.5} />
                  <span>Tapşırıqlar</span>
                </div>
              }
            />
            <NavLink
              href="tasksinexecution"
              label={
                <div className="flex items-center gap-2">
                  <IconCircleDashedCheck size="1rem" stroke={1.5} />
                  <span>İcraya verilmiş</span>
                </div>
              }
            />
            <NavLink
              href="tasksinpending"
              label={
                <div className="flex items-center gap-2">
                  <IconClockPause size="1rem" stroke={1.5} />
                  <span>Təsdiq gözləyən</span>
                </div>
              }
            />
            <NavLink
              href="info"
              label={
                <div className="flex items-center gap-2">
                  <IconInfoCircle size="1rem" stroke={1.5} />
                  <span>Məlumat üçün</span>
                </div>
              }
            />
            <NavLink
              href="report"
              label={
                <div className="flex items-center gap-2">
                  <IconClipboardText size="1rem" stroke={1.5} />
                  <span>Hesabat</span>
                </div>
              }
            />
          </NavLink>
        </div>

        {/* <p className="w-[70%] text-center ">Tapşırıqlar sisteminin istifadəçi rəhbər paneli</p> */}
      </div>
    </div>
  );
};

export default Header;
