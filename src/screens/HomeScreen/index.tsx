import AnimeItemList from '@Components/AnimeItemList';
import FlatlistEmpty from '@Components/FlatlistEmpty';
import FlatlistError from '@Components/FlatlistError';
import FlatlistLoading from '@Components/FlatlistLoading';
import React, { useCallback, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { AnimeItem, useGetAnimeListQuery } from '@Services/queries/getAnime';
import { debounce } from '@Utils/debounce';

const HomeScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const [queryValue, setQueryValue] = useState('');

  const {
    data,
    error,
    isFetching: isLoadingQuery,
    refetch,
  } = useGetAnimeListQuery(
    { status: 'complete', q: queryValue },
    { refetchOnMountOrArgChange: true },
  );

  const renderItem = useCallback(({ item }: { item: AnimeItem }) => {
    return <AnimeItemList data={item} />;
  }, []);

  const debouncedSearch = debounce((value: string) => {
    setQueryValue(value);
    refetch();
    // getAnimeList({ status: 'airing', q: queryValue }).unwrap();
  }, 3000);

  const handleSearch = (text: string) => {
    setSearchValue(text);
    debouncedSearch(text);
  };

  const renderHeaderComponent = useCallback(() => {
    return (
      <Searchbar
        value={searchValue}
        placeholder={'Search Anime'}
        onChangeText={handleSearch}
        style={styles.searchContainer}
        testID="search-bar"
      />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const renderSeparator = useCallback(() => {
    return <View style={{ height: 6 }} testID="separator" />;
  }, []);

  const renderLoadingIndicator = useCallback(() => {
    return <FlatlistLoading />;
  }, []);

  const renderEmpty = useCallback(() => {
    return <FlatlistEmpty />;
  }, []);

  const renderError = useCallback(() => {
    return <FlatlistError message={JSON.stringify(error)} />;
  }, [error]);

  return (
    <View style={styles.container}>
      {!data?.data && error && renderError()}
      <View style={{ flex: 1, width: '100%', height: '100%' }}>
        {renderHeaderComponent()}
        {isLoadingQuery ? (
          renderLoadingIndicator()
        ) : (
          <FlatList
            data={data?.data ?? []}
            renderItem={renderItem}
            keyExtractor={item => item.mal_id.toString()}
            style={styles.flatlistContainer}
            contentContainerStyle={{ paddingBottom: 20 }}
            ListEmptyComponent={renderEmpty}
            ItemSeparatorComponent={renderSeparator}
            scrollEventThrottle={16}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatlistContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 10,
  },
  searchContainer: { margin: 10 },
});

export default HomeScreen;
