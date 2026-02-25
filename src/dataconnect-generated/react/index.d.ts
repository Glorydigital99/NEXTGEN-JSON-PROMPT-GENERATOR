import { CreateMovieData, CreateMovieVariables, UpsertUserData, UpsertUserVariables, AddReviewData, AddReviewVariables, DeleteReviewData, DeleteReviewVariables, ListMoviesData, ListUsersData, ListUserReviewsData, GetMovieByIdData, GetMovieByIdVariables, SearchMovieData, SearchMovieVariables } from '../';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';






export function useListMovies(options?: useDataConnectQueryOptions<ListMoviesData>): UseDataConnectQueryResult<ListMoviesData, undefined>;
export function useListMovies(dc: DataConnect, options?: useDataConnectQueryOptions<ListMoviesData>): UseDataConnectQueryResult<ListMoviesData, undefined>;

export function useListUsers(options?: useDataConnectQueryOptions<ListUsersData>): UseDataConnectQueryResult<ListUsersData, undefined>;
export function useListUsers(dc: DataConnect, options?: useDataConnectQueryOptions<ListUsersData>): UseDataConnectQueryResult<ListUsersData, undefined>;

export function useListUserReviews(options?: useDataConnectQueryOptions<ListUserReviewsData>): UseDataConnectQueryResult<ListUserReviewsData, undefined>;
export function useListUserReviews(dc: DataConnect, options?: useDataConnectQueryOptions<ListUserReviewsData>): UseDataConnectQueryResult<ListUserReviewsData, undefined>;

export function useGetMovieById(vars: GetMovieByIdVariables, options?: useDataConnectQueryOptions<GetMovieByIdData>): UseDataConnectQueryResult<GetMovieByIdData, GetMovieByIdVariables>;
export function useGetMovieById(dc: DataConnect, vars: GetMovieByIdVariables, options?: useDataConnectQueryOptions<GetMovieByIdData>): UseDataConnectQueryResult<GetMovieByIdData, GetMovieByIdVariables>;

export function useSearchMovie(vars?: SearchMovieVariables, options?: useDataConnectQueryOptions<SearchMovieData>): UseDataConnectQueryResult<SearchMovieData, SearchMovieVariables>;
export function useSearchMovie(dc: DataConnect, vars?: SearchMovieVariables, options?: useDataConnectQueryOptions<SearchMovieData>): UseDataConnectQueryResult<SearchMovieData, SearchMovieVariables>;
