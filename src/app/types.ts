import { FC } from 'react';

export type NextLayoutProps<
  T = Record<string, string | Array<string> | undefined>,
> = {
  params: T;
};

export type NextPageProps<
  T = Record<string, string | Array<string> | undefined>,
> = {
  params: T;
  searchParams: { [key: string]: string | Array<string> | undefined };
};

export type Page<T = Record<string, string | Array<string> | undefined>> = FC<
  NextPageProps<T>
>;