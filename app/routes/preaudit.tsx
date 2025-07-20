import { LoaderFunctionArgs, redirect } from '@remix-run/node';

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const name = url.searchParams.get('name') || '';
  const email = url.searchParams.get('email') || '';

  const redirectTo = `https://docs.google.com/forms/d/e/1FAIpQLSeh3KZuspRloZYg3sQoOcY_yE2w4-KviCxY3Dg_raL6cr2kzg/viewform?usp=pp_url&entry.1640527279=${encodeURIComponent(
    name
  )}&entry.845900979=${encodeURIComponent(email)}`;

  return redirect(redirectTo);
}
