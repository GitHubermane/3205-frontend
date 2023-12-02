import type { AxiosResponse } from 'axios';
import { $api } from 'api/api';
import type { UserResponse } from 'types';

export const getUser = (
  email: string,
  telephone: string,
): Promise<AxiosResponse<UserResponse[]>> => {
  const telephoneQuery = telephone ? `&telephone=${telephone}` : '';

  return $api.get<UserResponse[]>(`/user?email=${email}${telephoneQuery}`);
};
