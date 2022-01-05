import * as LoginAC from './LoginAC';
import * as ProfileAC from './ProfileAC';
import * as UserAC from './UserAC';

export const ActionCreators = {
    ...LoginAC,
    ...ProfileAC,
    ...UserAC
}