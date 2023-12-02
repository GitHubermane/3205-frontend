import type { AxiosResponse } from 'axios';
import { $api } from 'api/api';
import type { UserResponse } from 'types';

export const getUser = (
  email: string,
  telephone: string,
): Promise<AxiosResponse<UserResponse[]>> => {
  const telephoneQuery = telephone ? `&number=${telephone}` : '';

  return $api.get<UserResponse[]>(`/user?email=${email}${telephoneQuery}`);
};
