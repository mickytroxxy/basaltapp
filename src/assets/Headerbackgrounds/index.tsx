import InfoHeaderBg from './InfoHeaderBg';
import DashboardHeaderBg from './DashboardHeaderBg';
import TransferHeaderBg from './TransferHeaderBg';
import AyoHeaderBg from './AyoHeaderBg'
import BusinessResponseBg from './BusinessResponseBg'

const HeaderBg = {InfoHeaderBg, DashboardHeaderBg, TransferHeaderBg, AyoHeaderBg, BusinessResponseBg};

export default HeaderBg;
export type HeaderBgTypeType = keyof typeof HeaderBg;
